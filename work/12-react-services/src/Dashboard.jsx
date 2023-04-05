import Loading from './Loading';
import UserWord from './UserWord';

function Dashboard({ username, storedWord, isWordPending, onLogout, onUpdateWord, onDeleteWord }) {

  return (
    <main className="dashboard">
      <p className="dashboard-greeting">Hello <span className="dashboard-username">{username}</span></p>
      <div className="logout-form">
        <button 
          type="button" 
          className="logout-to-submit" 
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div className="panel">
      { isWordPending && <Loading >Loading Word...</Loading> }
      { !isWordPending &&
        <UserWord
          storedWord={storedWord}
          onUpdateWord={onUpdateWord}
          onDeleteWord={onDeleteWord}
        />
      }
      </div>
    </main>
  );
}

export default Dashboard;