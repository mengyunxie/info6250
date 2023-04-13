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
  const user = users.getUser(username);
  res.json(user);
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
  const avatarList = avatars.getAvatars();
  const labelList = labels.getLabels();
  const user = users.createUser({username, defaultAvatar, avatars: avatarList, labels: labelList});
  const sid = sessions.addSession(username);
  res.cookie('sid', sid);
  res.json(user);
});

// Update user's avatar
app.patch('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const {avatar} = req.body;

  users.updateUserAvatar({username, avatar});
  res.json(users.getUser(username));
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

// Add a new diary
app.post('/api/v1/diaries', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { form } = req.body;
  if(!form.detail) {
    res.status(400).json({ error: 'required-detail' });
    return;
  }
  const user = users.getUser(username);

  const id = diaries.addDiary({user, form});
  res.json(diaries.getDiary(id));
});

// Update user's diary
app.patch('/api/v1/diaries/:id', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { id } = req.params;
  const {form} = req.body;
  if(!form.detail) {
    res.status(400).json({ error: 'required-detail' });
    return;
  }
  if(!diaries.contains(id)) {
    res.status(404).json({ error: `noSuchId`, message: `No todo with id ${id}` });
    return;
  }
  const diary = diaries.getDiary(id);
  if(diary.username != username) {
    res.status(404).json({ error: `notMatchUser`, message: `User id is not match` });
    return;
  }
  diaries.updateDiary({id, form})
  res.json(diaries.getDiary(id));
});

// Delete user's diary
app.delete('/api/v1/diaries/:id', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { id } = req.params;
  const exists = diaries.contains(id);
  if(exists) {
    diaries.deleteDiary(id);
  }
  res.json({ message: exists ? `diary ${id} deleted` : `diary ${id} did not exist` });
});

// Get user's diary
app.get('/api/v1/diaries/:id', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { id } = req.params;
  if(!diaries.contains(id)) {
    res.status(404).json({ error: `noSuchId`, message: `No todo with id ${id}` });
    return;
  }
  res.json(diaries.getDiary(id));
});

// Get user's diaries of different labels
app.get('/api/v1/diariesbylabel/:label', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { label } = req.params;

  let response;
  if(!label || label == labels.getDefaultLabel().key) {
    response = diaries.getDiaries(username);
  } else {
    response = diaries.getDiariesByLabel({username, label});
  }
  
  res.json(response);
});

// Get passersby's diaries
app.get('/api/v1/passersby/all', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json(diaries.getLatestPasserbyDiaries());
});

// Get user's passersby's diaries
app.get('/api/v1/passersby/mine', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json(diaries.getMinePasserbyDiaries(username));
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

