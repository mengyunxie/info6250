const sessions = {};

function updateSession({ sid, username }) {
  sessions[sid] = { username };
}

function getSession( sid ) {
  return sessions[sid];
}

function deleteSession( sid ) {
  if(sid) {
    delete sessions[sid];
  }
}

function isValid( sid ) { // Checking to see does it exist in the sessions object
  return sessions[sid] ? true : false;
}

module.exports = {
  updateSession,
  getSession,
  deleteSession,
  isValid
};

