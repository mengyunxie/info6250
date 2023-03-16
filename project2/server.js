const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const messages = require('./messages');
const sessions = require('./sessions');
const users = require('./users');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

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

  if(!username) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if(!users.isValid(username)) {
    res.status(400).json({ error: 'invalid-username' });
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

  res.json({ username });
});

// Users
app.get('/api/v1/users', (req, res) => {
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

  const newMessage = messages.addMessage({username, message});
  res.json(newMessage);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

