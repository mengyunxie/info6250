const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

const sessions = require('./sessions'); // "sessions" holds all users' sessions
const model = require('./model'); // "model" holds all the non-web logic thing
const view = require('./view'); // "view" holds the templates for the generated HTML

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const sid = req.cookies.sid;

    // If session id is invalid, remove the session id from the object and the cookie from the browser, redirect the user to the login page.
    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        res.send(view.loginPage());
        return;
    }
    
    const { username } = sessions.getSession(sid);
    const { word } = model.getCurrentUser(username);
    res.send(view.dataPage({ username,  word}));
});

app.post('/login', (req,res) => {
    const username = req.body.username.trim();
    const regexOfBadUsername = new RegExp('^dog$', 'i');
    const regex = new RegExp('^[a-zA-Z0-9]*$');

    // If username is invalid, respond with a 401 status code and send a error page.
    if(!username || regexOfBadUsername.test(username) || !regex.test(username)){
        const statusCode = 401;
        res.status(statusCode).send(view.errorPage({statusCode, message: "Invalid Username. Username can contain only letters or numbers."}));
        return; 
    }
    
    const sid = uuidv4();
    sessions.updateSession({ sid, username });

    // First time login, create a empty string for this user's stored word.
    if(!model.getCurrentUser(username)) {
        model.createWord(username);
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

app.post('/updateword', (req, res) => {
    const sid = req.cookies.sid;

    // If session id is invalid, remove the session id from the object and the cookie from the browser, redirect the user to /.
    if(!sid || !sessions.isValid(sid)) {
        sessions.deleteSession(sid);
        res.clearCookie('sid');
        res.redirect('/');
        return;
    }

    const word = req.body.word;
    const { username } = sessions.getSession(sid);
    model.updateWord({username, word})
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));