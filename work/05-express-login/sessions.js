const sessions = {};

function updateSession({ sid, username }) {
  sessions[sid] = { username };
}

function getSession( sid ) {
  return sessions[sid];
}

function deleteSession( sid ) {

  // If exist, delete it.
  if(sid) {
    delete sessions[sid];
  }
  
}

/* Checking to see does this sid exist in the sessions object. */
function isValid( sid ) {
  return sessions[sid] ? true : false;
}

module.exports = {
  updateSession,
  getSession,
  deleteSession,
  isValid
};

