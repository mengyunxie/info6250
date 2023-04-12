/* Login */
export function fetchLogin(username) {
  return fetch('/api/v1/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // set this header when sending JSON in the body of request
    },
    body: JSON.stringify( { username } ),
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if (response.ok) {
      return response.json();
    }
    return response.json()
    .catch( error => Promise.reject({ error }) )
    .then( err => Promise.reject(err) );
  });
}

/* Logout */
export function fetchLogout() {
  return fetch('/api/v1/session', {
    method: 'DELETE'
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if (response.ok) {
      return response.json();
    }
    return response.json()
    .catch( error => Promise.reject({ error }) )
    .then( err => Promise.reject(err) );
  });
}

/* Check for an existing session */
export function fetchSession() {
  return fetch('/api/v1/session')
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
      .catch( error => Promise.reject({ error }) )
      .then( err => Promise.reject(err) );
    });
}

export function fetchDiaries() {
  return fetch('/api/v1/diaries')
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
      .catch( error => Promise.reject({ error }) )
      .then( err => Promise.reject(err) );
    });
}

export function fetchPasserbyDiaries() {
  return fetch('/api/v1/passerbydiaries')
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
      .catch( error => Promise.reject({ error }) )
      .then( err => Promise.reject(err) );
    });
}