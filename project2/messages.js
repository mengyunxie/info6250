 const messages = [];

  function getMessages() {
    return messages;
  };

  /* Add a new message to the message list */
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
