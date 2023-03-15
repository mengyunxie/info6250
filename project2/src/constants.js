export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
    REQUIRED_MESSAGE: 'required-message'
  };
  
  export const CLIENT = {
    NETWORK_ERROR: 'network-error',
    NO_SESSION: 'noSession',
  };
  
  export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
    [SERVER.AUTH_MISSING]: 'Session id is invalid',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
    [SERVER.REQUIRED_MESSAGE]: 'Please enter the message to do',
    default: 'Something went wrong.  Please try again',
  };