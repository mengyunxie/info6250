import refreshList from './refreshList'; // Make calls to get the lists of logged-in users and messages
import { setTimeoutId } from './state'; // The user's state in client side

/* Every 5 seconds (roughly) refresh the list of message and users */
export default function polling({ state, rootEl }) {

  // Refresh the list of message and users
  refreshList({ state,  rootEl }); 

  // Update the Timeout Id into state
  const id = setTimeout( polling, 5000, { state, rootEl } );
  setTimeoutId(id);
}