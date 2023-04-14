import {
  LOGIN_STATUS,
  CLIENT,
  ACTIONS,
  AVATARS_KEY,
  SIDE_MENU,
  SIDE_MENU_SUB,
} from './constants';

export const initialState = {
  error: '',
  username: '',
  avatar: AVATARS_KEY.DEFAULT,
  loginStatus: LOGIN_STATUS.PENDING,
  isDashBoardPending: false,
  menu: SIDE_MENU.PASSERBY,
  subMenu: SIDE_MENU_SUB[SIDE_MENU.PASSERBY].DEFAULT,
  currentLabel: 'all',
  passerbyDiaries: [],
  diaries: [],
  diary: {},
  labels: [],
  avatars: []
};

function reducer(state, action) {
  console.log(action);
  switch(action.type) {

    case ACTIONS.LOG_IN:   // actions are the change in state, not how that change happened
      return {
        ...state,
        error: '', // constantly resetting this is a "pain point", and a sign of something to improve!
        loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
        username: action.username,
        avatar: action.avatar,
        labels: action.labels,
        avatars: action.avatars,
      };

    case ACTIONS.LOG_OUT:
      return {
        ...state,
        error: '',
        username: '',
        avatar: AVATARS_KEY.DEFAULT,
        loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
        isDashBoardPending: false,
        menu: SIDE_MENU.PASSERBY,
        subMenu: SIDE_MENU_SUB[SIDE_MENU.PASSERBY].DEFAULT,
        currentLabel: 'all',
        diary: {},
        diaries: [],
        passerbyDiaries: [],
        labels: [],
        avatars: [],
      };

    case ACTIONS.START_LOADING_DATA:
      return {
        ...state,
        error: '',
        isDashBoardPending: true, // Perhaps make this a "status" value like login?
      };  

    case ACTIONS.REPORT_ERROR:
      // We could move the "pick the message" logic from Status.jsx here. Better? It depends.
      return {
        ...state,
        isDashBoardPending: false,
        error: action.error || 'ERROR', // ERROR is just to ensure a truthy value
      };
    
    case ACTIONS.CLEAR_ERROR:
        return {
          ...state,
          error: '',
        };

    case ACTIONS.TOGGLE_MENU:
      return {
        ...state,
        menu: action.menu,
        currentLabel: 'all',
      };

    case ACTIONS.TOGGLE_SUB_MENU:
      return {
        ...state,
        subMenu: action.subMenu,
      };

    case ACTIONS.TOGGLE_CURRENT_LABEL:
      return {
        ...state,
        currentLabel: action.currentLabel,
      };

    case ACTIONS.GET_DIARY:
      return {
        ...state,
        error: '',
        isDashBoardPending: false,
        diary: action.diary
      };

    case ACTIONS.GET_DIARIES:
      return {
        ...state,
        error: '',
        isDashBoardPending: false,
        diaries: action.diaries
      };

    case ACTIONS.GET_PASSERBYDIARIES:
      return {
        ...state,
        error: '',
        isDashBoardPending: false,
        passerbyDiaries: action.passerbyDiaries
      };

    case ACTIONS.ADD_DIARY:
      return {
        ...state,
        isDashBoardPending: false,
        diaries: {
          ...state.diaries,
          [action.diary.id]: action.diary,
        },
      };
    
    case ACTIONS.UPDATE_DIARY:
      return {
        ...state,
        isDashBoardPending: false,
        diaries: {
          ...state.diaries,
          [action.diary.id]: action.diary,
        },
      };

    case ACTIONS.DELETE_DIARY:
      const diariesCopy = { ...state.diaries }; // "shallow" copy, but we are only making a shallow change
      delete diariesCopy[action.id];
      return {
        ...state,
        isDashBoardPending: false,
        diaries: diariesCopy, // No need to copy the copy
      };

    default:
      throw new Error({ error: CLIENT.UNKNOWN_ACTION, detail: action }); // reporting detail for debugging aid, not shown to user
  }
}

export default reducer;
