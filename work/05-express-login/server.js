const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

const sessions = require('./sessions');
const model = require('./model'); // "model" holds all the non-web logic thing
const view = require('./view'); // "view" holds the templates for the generated HTML

app.use(cookieParser());
app.use(express.static('./public'));

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    if(!sid || !sessions.getSession(sid)) { // checking to see does it exist in the sessions object?
        res.clearCookie('sid');
        res.send(view.loginPage());
        return;
    }
    
    const { username } = sessions.getSession(sid);
    const { word } = model.getWord(username);
    res.send(view.dataPage({ username,  word}));
});

app.post('/login', express.urlencoded({ extended: false }), (req,res) => {
    const username = req.body.username.trim();
    // login will fail for an empty username or the username "dog" or any username that is not made up of letters or numbers only
    if(!username || username === 'dog'){
        // If login fails (bad username) you should respond with a 401 status code 
        // and a web page that informs them and offers a link to see the login form again (this can be simply a link to the home page)
        // Give better errors than this!
        // url多了login，是不是问题
        res.status(401).send(view.errorPage('Error: invalid username'));
        return; 
    }
    const sid = uuidv4();
    sessions.updateSession({ sid, username })
    if(!model.getWord(username)) {
        model.createWord(username);
    } 
    res.cookie('sid', sid);
    res.redirect('/');
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
    // remove the stored word from being associated with that username
    // This means the session object doesn't hold the stored word.
    const sid = req.cookies.sid;
    sessions.deleteSession(sid);
    res.clearCookie('sid');
    res.redirect('/');
});

app.post('/update', express.urlencoded({ extended: false }), (req, res) => {
    //If a change is submitted, the server will record that change and associate it to the username and redirect to /
    // A second object to hold the stored words is a good idea. Use keys of the username. That way the data is associated with the user, not the session id. 
    // Every change attempt will make sure the session id is a valid user
    const word = req.body.word;
    const sid = req.cookies.sid;
    const { username } = sessions.getSession(sid);
    model.updateWord({username, word})
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));