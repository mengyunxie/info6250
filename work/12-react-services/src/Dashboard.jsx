import Loading from './Loading';
import UserWord from './UserWord';

function Dashboard({ username, storedWord, isWordPending, onLogout, onUpdateWord, onDeleteWord }) {

  return (
    <main className="user">
      <p className="user-greeting">Hello <span className="user-title">{username}</span></p>
      <div className="logout-form">
        <button 
          type="button" 
          className="logout-to-submit" 
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      { isWordPending && <Loading className="word-waiting">Loading Word...</Loading> }
      { !isWordPending &&
        <UserWord
          storedWord={storedWord}
          onUpdateWord={onUpdateWord}
          onDeleteWord={onDeleteWord}
        />
      }
    </main>
  );
}

export default Dashboard;