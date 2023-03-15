const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const messages = require('./messages');
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
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

// Create a new session (login)
app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;

  if(!users.isValid(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if(username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);

  const existingUserData = users.getUserData(username);

  if(!existingUserData) {
    users.createUserData(username);
  }
  users.updateUserData({username, isLoggedIn: true});
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
    const isLoggedIn = sessions.getSessionUserStatus(username);
    users.updateUserData({username, isLoggedIn});
  }

  res.json({ username }); // Provides some extra info that can be safely ignored
});

// Users
app.get('/api/v1/users', (req, res) => {
  // TODO---: Session checks for these are very repetitive - a good place to abstract out

  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json(users.getLoggedInUsers());
});

// Messages
app.get('/api/v1/messages', (req, res) => {
  // TODO---: Session checks for these are very repetitive - a good place to abstract out

  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json(messages.getMessages());
});

app.post('/api/v1/messages', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { message } = req.body;
  if(!message) {
    res.status(400).json({ error: 'required-message' });
    return;
  }

  const newMessage = messages.addMessage({username, message});
  res.json(newMessage);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

