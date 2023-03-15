 const messages = [];

  function getMessages() {
    return messages;
  };

  function addMessage({username, message}) {
    const newMessage = {
      username,
      message
    }
    messages.push(newMessage);
    return newMessage;
  };

module.exports = {
  getMessages,
  addMessage
};
