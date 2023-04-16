import { useReducer, useEffect } from 'react';

import './App.css';
import './icons.css';
import reducer, { initialState } from './reducer';
import {
  SIDE_MENU,
  ROUTER,
  ACTIONS,
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchUpdateUserAvatar,
  fetchDiariesByLabel,
  fetchPasserbyDiaries,
  fetchMyPasserbyDiaries,
  fetchAddDiary,
  fetchUpdateDiary,
  fetchDeleteDiary,
} from './services';

import Dashboard from './Dashboard';
import Login from './Login';
import Loading from './Loading';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onLogin(username) { 
    fetchLogin(username)
    .then( res => {
      dispatch({ type: ACTIONS.LOG_IN, username: res.username,  avatar: res.avatar, labels: res.labels, avatars: res.avatars});

      onSetMenu(state.menu);
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      dispatch({ type: ACTIONS.LOG_OUT });
    });
  };

  function onLogout() {
    dispatch({ type: ACTIONS.LOG_OUT });
    fetchLogout() // We don't really care about results
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
    });
  };

  /* Rmove the Status component and clear the error message */
  function onClearStatus() {
    dispatch({ type: ACTIONS.CLEAR_ERROR });
  }

  function onSetCurrentLabel({currentLabel}) {
    dispatch({ type: ACTIONS.TOGGLE_CURRENT_LABEL, currentLabel});
    getDiariesByLabel(currentLabel);
  }

  function onSetMenu(menu) {
    dispatch({ type: ACTIONS.TOGGLE_MENU, menu });
    
    if(menu === SIDE_MENU.PASSERBY) {
      onSetRouter({currentRouter: ROUTER[SIDE_MENU.PASSERBY].DEFAULT});
    }
    if(menu === SIDE_MENU.MYDIARY) {
      onSetRouter({currentRouter: ROUTER[SIDE_MENU.MYDIARY].DEFAULT});
    }
    if(menu === SIDE_MENU.SETTING) {
      onSetRouter({currentRouter: ROUTER[SIDE_MENU.SETTING].DEFAULT});
    }
  }


  function onSetRouter({currentRouter}) {
    dispatch({ type: ACTIONS.TOGGLE_ROUTER, currentRouter, previousRouter: state.currentRouter});
    if(currentRouter === ROUTER[SIDE_MENU.PASSERBY].DEFAULT) {
      getPasserbyDiaries();
    }
    if(currentRouter === ROUTER[SIDE_MENU.PASSERBY].MINE) {
      getMyPasserbyDiaries();
    }
    if(currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT) {
      getDiariesByLabel();
    }
  }

  function onDeleteDiary(id) {
    dispatch({ type: ACTIONS.START_LOADING_DATA });
    fetchDeleteDiary(id)
    .then( res => {
      dispatch({ type: ACTIONS.DELETE_DIARY, id});
      dispatch({ type: ACTIONS.TOGGLE_ROUTER, currentRouter: ROUTER[SIDE_MENU.MYDIARY].DEFAULT, previousRouter: state.currentRouter});
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      if( err?.error === SERVER.AUTH_MISSING ) {
        dispatch({ type: ACTIONS.LOG_OUT });
      }
    });
  }

  function onUpdateDiary({details, labelKey, isPasserby}) {
    dispatch({ type: ACTIONS.START_LOADING_DATA });
    fetchUpdateDiary({details, labelKey, isPasserby})
    .then( res => {
      dispatch({ type: ACTIONS.UPDATE_DIARY, diary: res });
      dispatch({ type: ACTIONS.TOGGLE_ROUTER, currentRouter: ROUTER[SIDE_MENU.MYDIARY].DEFAULT, previousRouter: state.currentRouter});
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      if( err?.error === SERVER.AUTH_MISSING ) {
        dispatch({ type: ACTIONS.LOG_OUT });
      }
    });
  }

  function onSubmitDiary({details, labelKey, isPasserby}) {
    dispatch({ type: ACTIONS.START_LOADING_DATA });
    fetchAddDiary({details, labelKey, isPasserby})
    .then( res => {
      dispatch({ type: ACTIONS.ADD_DIARY, diary: res });
      dispatch({ type: ACTIONS.TOGGLE_ROUTER, currentRouter: ROUTER[SIDE_MENU.MYDIARY].DEFAULT, previousRouter: state.currentRouter});
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      if( err?.error === SERVER.AUTH_MISSING ) {
        dispatch({ type: ACTIONS.LOG_OUT });
      }
    });
  }

  function getPasserbyDiaries() {
    dispatch({ type: ACTIONS.START_LOADING_DATA });
    fetchPasserbyDiaries()
    .then( res => {
      dispatch({ type: ACTIONS.GET_PASSERBYDIARIES, passerbyDiaries: res });
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      if( err?.error === SERVER.AUTH_MISSING ) {
        dispatch({ type: ACTIONS.LOG_OUT });
      }
    });
  }

  function getMyPasserbyDiaries() {
    dispatch({ type: ACTIONS.START_LOADING_DATA });
    fetchMyPasserbyDiaries()
    .then( res => {
      dispatch({ type: ACTIONS.GET_PASSERBYDIARIES, passerbyDiaries: res });
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      if( err?.error === SERVER.AUTH_MISSING ) {
        dispatch({ type: ACTIONS.LOG_OUT });
      }
    });
  }

  function getDiariesByLabel(currentLabel) {
    dispatch({ type: ACTIONS.START_LOADING_DATA });
    fetchDiariesByLabel(currentLabel || state.currentLabel)
    .then( res => {
      dispatch({ type: ACTIONS.GET_DIARIES, diaries: res});
    })
    .catch( err => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      if( err?.error === SERVER.AUTH_MISSING ) {
        dispatch({ type: ACTIONS.LOG_OUT });
      }
    });
  }

  function checkForSession() {
    fetchSession()
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .then( res => { // The returned object from the service call
      dispatch({ type: ACTIONS.LOG_IN, username: res.username,  avatar: res.avatar, labels: res.labels, avatars: res.avatars});
      onSetMenu(state.menu);
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
        dispatch({ type: ACTIONS.LOG_OUT });
        return;
      }
      // For unexpected errors, report them
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
    });
  }

  // Here we use a useEffect to perform the initial loading
  // Initial loading isn't triggered by an event like most service calls
  useEffect(
    () => {
      checkForSession();
    },
    [] // Only run on initial render
  );

  return (
    <div className="app">
     {/* { error && <Status  error={error} onClearStatus={onClearStatus} /> } */}
      { state.loginStatus === LOGIN_STATUS.PENDING && <Loading>Loading state...</Loading> }
      { state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <Login onLogin={onLogin} error={state.error} onClearStatus={onClearStatus}/> }
      { state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <Dashboard
            username={state.username}
            avatar={state.avatar}
            labels={state.labels}
            avatars={state.avatars}
            passerbyDiaries={state.passerbyDiaries}
            diaries={state.diaries}
            currentLabel={state.currentLabel}
            menu={state.menu}
            previousRouter={state.previousRouter}
            currentRouter={state.currentRouter}
            onSetMenu={onSetMenu}
            onLogout={onLogout}
            onSetRouter={onSetRouter}
            onSetCurrentLabel={onSetCurrentLabel}
            onSubmitDiary={onSubmitDiary}
            onDeleteDiary={onDeleteDiary}
            onUpdateDiary={onUpdateDiary}
          />
      }
    </div>
  );
}

export default App;