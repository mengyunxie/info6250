const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

const sessions = require('./sessions'); // "sessions" holds all users' sessions
const model = require('./model'); // "model" holds all the non-web logic thing
const view = require('./view'); // "view" holds the templates for the generated HTML
const engine = require('./game');
const wordList = require('./words');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const sid = req.cookies.sid;

    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        // TODO---: If there is not a valid session id, the page will display a message and a login form
        res.send(view.loginPage("Session id is invalid"));
        return;
    }
    
    const { username } = sessions.getSession(sid);
    const game = model.getCurrentUser(username);
    console.log("home page ---");
    console.log(game);
    res.send(view.dataPage({ username,  game}));
});

app.post('/login', (req,res) => {
    const username = req.body.username.trim();
    const regexOfBadUsername = new RegExp('^dog$', 'i');
    const regex = new RegExp('^[a-zA-Z0-9]*$');

    if(!username || regexOfBadUsername.test(username) || !regex.test(username)){
        // TODO---: If the username is invalid (including "dog"), respond with a login form that contains a message about the username being invalid
        res.send(view.loginPage("Invalid Username. Username can contain only letters or numbers."));
        return; 
    }
    
    const sid = uuidv4();
    sessions.updateSession({ sid, username });
    // First time login, create a empty string for this user's stored word.
    if(!model.getCurrentUser(username)) {
        const secretWord = engine.start(wordList);
        console.log(`Username: ${username}, SecretWord: ${secretWord}`);
        model.createGameData({username, secretWord, wordList});
    } 
    res.cookie('sid', sid);
    res.redirect('/');
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    sessions.deleteSession(sid);
    res.clearCookie('sid');
    res.redirect('/');
});

app.post('/guess', (req, res) => {
    const sid = req.cookies.sid;

    // If session id is invalid, remove the session id from the object and the cookie from the browser, redirect the user to /.
    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        // TODO---: If there is not a valid session id, the page will display a message and a login form
        res.send(view.loginPage("Session id is invalid"));
        // res.redirect('/');
        return;
    }

    const guess = req.body.word;
    
    const { username } = sessions.getSession(sid);
    const game = model.getCurrentUser(username);
    game.currentGame.guessWord = guess.toLowerCase();
    if(!engine.isValidGuess(game)) {
        // If the guess is not valid, the server will update the server state for that player and respond with a redirect to the Home Page
        game.currentGame.turns++;
        game.currentGame.recentGuess = {
            isValid: false,
            guess:game.currentGame.guessWord,
            match: 0,
        }
        game.currentGame.guessWord = "";
        res.redirect('/');
        return;
    }
    // If the guess is valid, the server will update the server state for that player and respond with a redirect to the Home Page
    engine.takeTurn(game);
    res.redirect('/');
});


app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;

    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        // // TODO---: If there is not a valid session id, the page will display a message and a login form
        res.send(view.loginPage("Session id is invalid"));
        return;
    }
    
    const { username } = sessions.getSession(sid);
    const secretWord = engine.start(wordList);
    const game = model.getCurrentUser(username);
    const previousGame = {
        secretWord: game.currentGame.secretWord,
        turns: game.currentGame.turns,
        win: game.currentGame.win
    }
    console.log(`Username: ${username}, SecretWord: ${secretWord}`);
    model.updateGameData({username, secretWord, wordList, previousGame});
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));