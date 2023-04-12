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

// Update user's avatar
export function fetchUpdateUserAvatar(avatar) {
  return fetch('/api/v1/session', {
    method: 'PATCH',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({avatar}),
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

// Add a new diary
export function fetchAddDiary(form) {
  return fetch('/api/v1/diaries', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({form}),
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

// Update user's diary
export function fetchUpdateDiary({id, form}) {
  return fetch(`/api/v1/diaries/${id}`, {
    method: 'PATCH',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({form}),
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

// Delete user's diary
export function fetchDeleteDiary(id) {
  return fetch(`/api/v1/diaries/${id}`, {
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

// Get user's diary
export function fetchDiary(id) {
  return fetch(`/api/v1/diaries/${id}`)
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

// Get user's diaries of different labels
export function fetchDiaries(label) {
  return fetch(`/api/v1/diariesbylabel/${label}`)
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

// Get passersby's diaries
export function fetchPasserbyDiaries() {
  return fetch('/api/v1/passersby/all')
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

// Get user's passersby's diaries
export function fetchMyPasserbyDiaries() {
  return fetch('/api/v1/passersby/mine')
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

// Get avatars
export function fetchAvatars() {
  return fetch('/api/v1/avatars')
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

// Get labels
export function fetchLabels() {
  return fetch('/api/v1/labels')
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