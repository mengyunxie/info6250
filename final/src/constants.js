export const SIDE_MENU = {
  PASSERBY: 'Passerby',
  MYDIARY: 'MyDiary',
  SETTING: 'Setting',
};

export const ROUTER = {
  [SIDE_MENU.PASSERBY]: {
    DEFAULT: 'PasserbyList',
    MINE: 'PasserbyMine',
    DETAIL: 'PasserbyDetail'
  },
  [SIDE_MENU.MYDIARY]: {
    DEFAULT: 'MyDiaryList',
    ADD: 'MyDiaryAdd',
    DETAIL: 'MyDiaryDetail',
    EDIT: 'MyDiaryEdit',
  },
  [SIDE_MENU.SETTING]: {
    DEFAULT: 'Profile',
    DETAIL: 'ProfileDetail',
  },
};

export const DEFAULT_LABEL_KEY = 'all';

export const AVATARS_KEY = {
  DEFAULT: 'Default',
  GIRL: 'Girl',
  BOY: 'Boy',
  FEMALE: 'Female',
  MALE: 'Male',
  GRANDMA: 'Grandma',
  GRANDPA: 'Grandpa',
  CAT: 'Cat',
  BEAR: 'Bear',
  DEER: 'Deer',
  DOG: 'Dog',
  FOX: 'Fox',
  HAPPY: 'Happy',
  WONDER: 'Wonder',
  BATMAN: 'Batman',
};

export const ACTIONS = {
  LOG_IN: 'logIn',
  LOG_OUT: 'logOut',
  UPDATE_AVATAR: 'updateAvatar',
  START_LOADING_DATA: 'startLoadingData',
  REPORT_ERROR: 'reportError',
  CLEAR_ERROR: 'clearError',
  TOGGLE_MENU: 'toggleMenu',
  TOGGLE_ROUTER: 'toggleRouter',
  GET_DIARY: 'getDiary',
  GET_DIARIES: 'getDiaries',
  GET_PASSERBYDIARIES: 'getPasserbyDiaries',
  ADD_DIARY: 'addDiary',
  UPDATE_DIARY: 'updateDiary',
  DELETE_DIARY: 'deleteDiary',
  VIEW_DIARY: 'ViewDiary',
};

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
  UNKNOWN_ACTION: 'unknownAction',
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