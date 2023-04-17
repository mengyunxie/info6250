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
  previousRouter,
  currentRouter,
  onSubmitDiary,
  onDeleteDiary,
  onUpdateDiary,
  onUpdateAvatar,
  onSetMenu, 
  onSetRouter,
  onLogout,
  onClearStatus,
  error,
  isDashBoardPending,
  currentDiary,
  onSetCurrentDiary,
  onGetDiariesByLabel,
  onGetMyPasserbyDiaries,
  onGetPasserbyDiaries,
}) {
  return (
    <main className="dashboard">
      <div className='dashboard-user'>
        <Avatar avatar={avatar} username={username} />
      </div>
      <SideMenu
        menu={menu}
        onSetMenu={onSetMenu}
        onGetDiariesByLabel={onGetDiariesByLabel}
        onGetPasserbyDiaries={onGetPasserbyDiaries}
      />
      <NavigationControls 
        labels={labels}
        menu={menu}
        currentRouter={currentRouter}
        onLogout={onLogout}
        onSetRouter={onSetRouter}
        onGetDiariesByLabel={onGetDiariesByLabel}
        onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
        onGetPasserbyDiaries={onGetPasserbyDiaries}
      />
      <PanelControls 
        username={username} 
        avatar={avatar} 
        labels={labels} 
        avatars={avatars} 
        menu={menu}
        error={error}
        previousRouter={previousRouter}
        currentRouter={currentRouter}
        onSetRouter={onSetRouter}
        passerbyDiaries={passerbyDiaries} 
        diaries={diaries}
        isDashBoardPending={isDashBoardPending}
        currentDiary={currentDiary}
        onSetCurrentDiary={onSetCurrentDiary}
        onSubmitDiary={onSubmitDiary}
        onDeleteDiary={onDeleteDiary}
        onUpdateDiary={onUpdateDiary}
        onUpdateAvatar={onUpdateAvatar}
        onClearStatus={onClearStatus}
        onGetDiariesByLabel={onGetDiariesByLabel}
        onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
        onGetPasserbyDiaries={onGetPasserbyDiaries}
      />
    </main>
  );
}

export default Dashboard;