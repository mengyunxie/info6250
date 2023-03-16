export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
    INVALID_USERNAME: 'invalid-username'
  };
  
  export const CLIENT = {
    NETWORK_ERROR: 'network-error',
    NO_SESSION: 'noSession',
  };
  
  export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
    [SERVER.AUTH_MISSING]: 'Session id is invalid',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
    [SERVER.REQUIRED_USERNAME]: 'The username can not be empty, please try again.',
    [SERVER.INVALID_USERNAME]: 'Please enter a valid (letters and/or numbers) username of up to 20 characters',
    default: 'Something went wrong.  Please try again',
  };