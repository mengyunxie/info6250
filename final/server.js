const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const sessions = require('./sessions');
const users = require('./users');
const diaries = require('./diaries');
const avatars = require('./avatars');
const labels = require('./labels');

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json()); // Parses requests with json content bodies

// Check for existing session (used on page load)
app.get('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json(users.getUser({username}));
});

// Create a new session (login)
app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;
  if(!username) { // The username is empty
    res.status(400).json({ error: 'required-username' });
    return;
  }
  if(!users.isValidUsername(username)) {
    res.status(400).json({ error: 'invalid-username' });
    return;
  }
  if(username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }
  const defaultAvatar = avatars.getDefaultAvatar();
  const sid = sessions.addSession(username);
  res.cookie('sid', sid);
  res.json(users.createUser({username, defaultAvatar}));
});

// Logout
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
  res.json({ wasLoggedIn: !!username }); // Provides some extra info that can be safely ignored
});


app.get('/api/v1/diaries', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json(diaries.getDiaries({username}));
});


app.post('/api/v1/diaries', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const form = req.body;
  if(!form.detail) {
    res.status(400).json({ error: 'required-detail' });
    return;
  }

  const id = diaries.addDiary(form);
  res.json(diaries.getDiary({username, id}));
});


app.get('/api/v1/passerbydiaries', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json(diaries.getLatestPasserbyDiaries());
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

