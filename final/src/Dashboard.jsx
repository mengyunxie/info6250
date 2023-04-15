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
  currentLabel,
  menu,
  previousRouter,
  currentRouter,
  onSetMenu, 
  onSetRouter,
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
        currentLabel={currentLabel}
        menu={menu}
        currentRouter={currentRouter}
        onLogout={onLogout}
        onSetRouter={onSetRouter}
        onSetCurrentLabel={onSetCurrentLabel}
      />
      <PanelControls 
        username={username} 
        avatar={avatar} 
        labels={labels} 
        avatars={avatars} 
        menu={menu}
        previousRouter={previousRouter}
        currentRouter={currentRouter}
        onSetRouter={onSetRouter}
        passerbyDiaries={passerbyDiaries} 
        diaries={diaries}
      />
    </main>
  );
}

export default Dashboard;