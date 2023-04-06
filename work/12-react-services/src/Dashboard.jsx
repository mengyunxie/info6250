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
      <UserWord
        storedWord={storedWord}
        isWordPending={isWordPending}
        onUpdateWord={onUpdateWord}
        onDeleteWord={onDeleteWord}
      />
    </main>
  );
}

export default Dashboard;