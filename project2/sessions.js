const uuid = require('uuid').v4;

const sessions = {};

function addSession(username) {
  const sid = uuid();
  sessions[sid] = {
    username,
  };
  return sid;
}

function getSessionUser(sid) {
  return sessions[sid]?.username;
}

function getSessionUserStatus(username) {
  const userList  = Object.values(sessions).filter((values) => values.username == username);
  return userList.length > 0;
}

function deleteSession(sid) {
  delete sessions[sid];
}

module.exports = {
  addSession,
  deleteSession,
  getSessionUser,
  getSessionUserStatus
};
