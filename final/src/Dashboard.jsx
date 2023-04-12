import SideMenu from './SideMenu';
import NavigationControls from './NavigationControls';
import PanelControls from './PanelControls';
import Avatar from './Avatar';

function Dashboard({username, avatar, menu, onSetMenu, onLogout}) {

  return (
    <main className="dashboard">
      <div className='dashboard-user'>
        <Avatar username={username} avatar={avatar}/>
      </div>
      <SideMenu
        menu={menu}
        onSetMenu={onSetMenu}
      />
      <NavigationControls menu={menu} onLogout={onLogout}/>
      <PanelControls menu={menu} />
    </main>
  );
}

export default Dashboard;