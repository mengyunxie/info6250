import SideMenu from './SideMenu';
import NavigationControls from './NavigationControls';
import PanelControls from './PanelControls';
import Avatar from './Avatar';

function Dashboard({username, avatar, passerbyDiaries, diaries, menu, onSetMenu, onSetNavigation, onLogout}) {

  return (
    <main className="dashboard">
      <div className='dashboard-user'>
        <Avatar avatar={avatar}><span className="avatar-username">{username}</span></Avatar>
      </div>
      <SideMenu
        menu={menu}
        onSetMenu={onSetMenu}
      />
      <NavigationControls 
        menu={menu} 
        onLogout={onLogout}
        onSetNavigation={onSetNavigation}
      />
      <PanelControls username={username} avatar={avatar} menu={menu} passerbyDiaries={passerbyDiaries} diaries={diaries}/>
    </main>
  );
}

export default Dashboard;