const sessions = {};

function updateSession({ sid, username }) {
  sessions[sid] = { username };
}

function getSession( sid ) {
  return sessions[sid];
}

function deleteSession( sid ) {
  delete sessions[sid];
}

module.exports = {
  updateSession,
  getSession,
  deleteSession
};

