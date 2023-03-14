  const uuid = require('uuid').v4;

  const messages = {};

  function contains(id) {
    return !!messages[id];
  };

  function getMessages() {
    return messages;
  };

  function addMessage(username, message) {
    const id = uuid();
    messages[id] = {
        username,
        message,
    };
    return id;
  };

module.exports = {
  contains,
  getMessages,
  addMessage
};
