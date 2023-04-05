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

/* Get user's word */
export function fetchWord() {
  return fetch('/api/v1/word')
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

/* Update user's word */
export function updateWord(word) {
  return fetch('/api/v1/word/', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( { word } ),
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

/* Delete user's word */
export function fetchDeleteWord() {
  return fetch(`/api/v1/word`, {
    method: 'DELETE',
  })
  .catch( () => Promise.reject({ error: 'networkError' }) )
  .then( response => {
    if (response.ok) {
      return response.json();
    }
    return response.json()
    .catch( error => Promise.reject({ error }) )
    .then( err => Promise.reject(err) );
  });
}