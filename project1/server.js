"use strict";
const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

const sessions = require('./sessions'); // "sessions" holds all users' sessions
const model = require('./model'); // "model" holds all the non-web logic thing
const view = require('./view'); // "view" holds the templates for the generated HTML
const engine = require('./engine'); // "engine" is the game's engine
const wordList = require('./words'); // "words" holds all possible words

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const sid = req.cookies.sid;

    // If there is not a valid session id, the page will display a message and a login form
    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        res.send(view.loginPage());
        return;
    }
    
    const { username } = sessions.getSession(sid);
    const user = model.getCurrentUser(username);
    res.send(view.homePage({ username,  user}));
});

app.post('/login', (req,res) => {
    const username = req.body.username.trim();
    const regexOfBadUsername = /^dog$/i;
    const regex = /^[a-zA-Z0-9]*$/;

    // If the username is invalid (including "dog"), respond with a login form with a message
    if(!username || regexOfBadUsername.test(username) || !regex.test(username)){
        res.send(view.loginPage("Invalid Username. Username can contain only letters or numbers."));
        return; 
    }

    // First time login, create a default user data for this new user and pickWord a new secret word
    if(!model.getCurrentUser(username)) {
        const secretWord = engine.pickWord(wordList);
        model.createUser({username, secretWord, wordList});
        console.log(`Username: ${username}, SecretWord: ${secretWord}`);
    } 
    
    const sid = uuidv4();
    sessions.updateSession({ sid, username });
    res.cookie('sid', sid);

    // Respond with a redirect to the Home Page
    res.redirect('/');
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    sessions.deleteSession(sid);
    res.clearCookie('sid');

    // Respond with a redirect to the Home Page
    res.redirect('/');
});

app.post('/guess', (req, res) => {
    const sid = req.cookies.sid;

    // If there is not a valid session id, the page will display a message and a login form
    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        res.send(view.loginPage("Session id is invalid"));
        return;
    }

    const guess = req.body.word;
    const { username } = sessions.getSession(sid);
    const user = model.getCurrentUser(username);
    user.guessWord = guess;

    // If the guess is not valid, update the user's data and respond with a redirect to the Home Page
    if(!engine.isValidGuess(user)) {
        user.recentGuess = {
            isValid: false,
            guess:user.guessWord,
            match: 0,
        }
        user.guessWord = "";
        res.redirect('/');
        return;
    }

    // If the guess is valid, update the user's data and respond with a redirect to the Home Page
    engine.takeTurn(user);
    res.redirect('/');
});

app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;

    // If there is not a valid session id, the page will display a message and a login form
    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid'); 
        res.send(view.loginPage("Session id is invalid"));
        return;
    }
    
    const { username } = sessions.getSession(sid);
    const secretWord = engine.pickWord(wordList);
    model.updateUser({username, secretWord, wordList});
    console.log(`Username: ${username}, SecretWord: ${secretWord}`);

    // Respond with a redirect to the Home Page.
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));