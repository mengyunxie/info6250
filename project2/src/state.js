import { MESSAGES } from './constants';

const state = {
    username: '',
    isLoggedIn: false,
    isLoginPending: true, // We start with our login status unknown
    isMessagesPending: false,
    isUsersPending: false,
    error: '',
    messages: [],
    users: {}
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
    state.isLoggedIn = false;
    state.isLoginPending = false;
    state.username = '';
    state.error = '';
  }

  export function waitOnUsers() {
    state.users = {};
    state.isUsersPending = true;
    state.error = '';
  }
  
  export function setUsers(users) {
    state.users = users;
    state.isUsersPending = false;
    state.error = '';
  }

  export function waitOnMessages() {
    state.messages = [];
    state.isMessagesPending = true;
    state.error = '';
  }
  
  export function setMessages(messages) {
    state.messages = messages;
    state.isMessagesPending = false;
    state.error = '';
  }

  
  export function addMessage(message) {
    state.messages.push(message);
    state.error = '';
  }
  
  export function setError(error) {
    console.log(error);
    if(!error) {
      state.error = '';
      return;
    }
    state.error = MESSAGES[error] || MESSAGES.default;
  }
  
  export default state;