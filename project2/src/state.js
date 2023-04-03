import { MESSAGES } from './constants';

const state = {
    username: '',
    isLoggedIn: false,
    isLoginPending: true,
    isMessagesPending: false,
    isUsersPending: false,
    error: '',
    messages: [],
    users: [],
    timeoutId: ''
  };

  export function waitOnLogin() {
    state.isLoggedIn = false;
    state.isLoginPending = true;
    state.username = '';
    state.error = '';
  }
  
  export function login(username) {
    state.isLoggedIn = true;
    state.isLoginPending = false;
    state.username = username;
    state.error = '';
  }
  
  export function logout() {
    clearTimeout(state.timeoutId); // Cancel the polling
    state.timeoutId = '';
    state.username = '';
    state.isLoggedIn = false;
    state.isLoginPending = false;
    state.isMessagesPending = false;
    state.isUsersPending = false;
    state.error = '';
    state.users = [];
    state.messages = [];
  }

  export function waitOnUsers() {
    state.isUsersPending = true;
  }
  
  export function setUsers(users) {
    state.users = users;
    state.isUsersPending = false;
  }

  export function waitOnMessages() {
    state.isMessagesPending = true;
  }
  
  export function setMessages(messages) {
    state.messages = messages;
    state.isMessagesPending = false;
  }
  
  export function addMessage(message) {
    state.messages.push(message);
    state.isMessagesPending = false;
  }

  export function setTimeoutId(timeoutId) {
    state.timeoutId = timeoutId;
  }
  
  export function setError(error) {
    if(!error) {
      state.error = '';
      return;
    }
    state.error = MESSAGES[error] || MESSAGES.default;
  }
  
  export default state;