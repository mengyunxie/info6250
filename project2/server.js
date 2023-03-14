const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const sessions = require('./sessions');
const users = require('./users');

// This server.js is here to allow your front end JS fetch() calls to work
// You are not (yet) expected to know how to create a server.js like this
//
// Do NOT modify this file for this assignment

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json()); // Parses requests with json content bodies

// Sessions
// Check for existing session (used on page load)
app.get('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

// Create a new session (login)
app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;

  if(!users.isValidUsername(username)) {
    console.log(username);
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if(username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);

  res.cookie('sid', sid);
  res.json({ username });
});

app.delete('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(sid) {
    res.clearCookie('sid');
  }

  if(username) {
    // Delete the session, but not the user data
    sessions.deleteSession(sid);
  }

  // We don't report any error if sid or session didn't exist
  // Because that means we already have what we want
  res.json({ wasLoggedIn: !!username }); // Provides some extra info that can be safely ignored
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

