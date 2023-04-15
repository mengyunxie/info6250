import { MESSAGES } from './constants';

function Status({ error, onClearStatus }) {
  const message = MESSAGES[error] || MESSAGES.default;
  return (
    <div className="status">
      {error && 
        <>
          <span className="status-message">{message}</span>
          <button 
            type="button"
            className="status-delete"
            onClick={onClearStatus}
          >
            X
          </button>
        </>
      }
    </div>
  );
}

export default Status;
