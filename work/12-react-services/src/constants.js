export const LOGIN_STATUS = {
  PENDING: 'pending',
  NOT_LOGGED_IN: 'notLoggedIn',
  IS_LOGGED_IN: 'loggedIn',
};

export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  INVALID_USERNAME: 'invalid-username',
  INVALID_WORD : 'invalid-word',
  REQUIRED_WORD: 'required-word'
};

export const CLIENT = {
  NETWORK_ERROR: 'network-error',
  NO_SESSION: 'noSession',
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
  [SERVER.AUTH_MISSING]: 'Session id is invalid',
  [SERVER.AUTH_INSUFFICIENT]: 'This is a denied user, please try again.',
  [SERVER.REQUIRED_USERNAME]: 'The username can not be empty, please try again.',
  [SERVER.INVALID_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
  [SERVER.INVALID_WORD]: 'Word must be letters, please try again!',
  [SERVER.REQUIRED_WORD]: 'Word is required, please try again!',
  default: 'Something went wrong.  Please try again',
};