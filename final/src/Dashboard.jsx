import SideMenu from './SideMenu';
import NavigationControls from './NavigationControls';
import PanelControls from './PanelControls';
import Avatar from './Avatar';

function Dashboard({
  username, 
  avatar, 
  labels, 
  avatars, 
  passerbyDiaries, 
  diaries, 
  menu, 
  onSetMenu, 
  onSetSubMenu,
  onSetCurrentLabel,
  onLogout,
}) {
  return (
    <main className="dashboard">
      <div className='dashboard-user'>
        <Avatar avatar={avatar} username={username} />
      </div>
      <SideMenu
        menu={menu}
        onSetMenu={onSetMenu}
      />
      <NavigationControls 
        labels={labels}
        menu={menu} 
        onLogout={onLogout}
        onSetSubMenu={onSetSubMenu}
        onSetCurrentLabel={onSetCurrentLabel}
      />
      <PanelControls 
        username={username} 
        avatar={avatar} 
        labels={labels} 
        avatars={avatars} 
        menu={menu} 
        passerbyDiaries={passerbyDiaries} 
        diaries={diaries}
      />
    </main>
  );
}

export default Dashboard;