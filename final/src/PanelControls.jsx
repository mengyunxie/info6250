import {SIDE_MENU} from './constants';
import PasserbyPanel from './PasserbyPanel';
import MyDiaryPanel from './MyDiaryPanel';
import SettingPanel from './SettingPanel';
import Status from './Status';
import Loading from './Loading';

function PanelControls({
    username, 
    avatar, 
    menu,
    previousNavigation,
    currentNavigation,
    onSetNavigation,
    labels,
    onSubmitDiary, 
    onDeleteDiary,
    onUpdateDiary,
    onUpdateAvatar,
    avatars, 
    passerbyDiaries, 
    diaries,
    error,
    onClearStatus,
    isDashBoardPending,
    currentDiary,
    onSetCurrentDiary,
    onGetDiariesByLabel,
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {

    if(isDashBoardPending) {
        return <Loading>Loading Data...</Loading>;
    }

    return (
        <div className="panel-controls">
            { error && <Status  error={error} onClearStatus={onClearStatus} /> }
            {menu === SIDE_MENU.PASSERBY && <PasserbyPanel 
                passerbyDiaries={passerbyDiaries}
                previousNavigation={previousNavigation}
                currentNavigation={currentNavigation}
                currentDiary={currentDiary}
                onSetCurrentDiary={onSetCurrentDiary}
                onSetNavigation={onSetNavigation}
                onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
                onGetPasserbyDiaries={onGetPasserbyDiaries}
            />}
            {menu === SIDE_MENU.MYDIARY && <MyDiaryPanel 
                diaries={diaries}
                labels={labels}
                previousNavigation={previousNavigation}
                currentNavigation={currentNavigation}
                currentDiary={currentDiary}
                onSetCurrentDiary={onSetCurrentDiary}
                onSetNavigation={onSetNavigation}
                onSubmitDiary={onSubmitDiary}
                onDeleteDiary={onDeleteDiary}
                onUpdateDiary={onUpdateDiary}
                onGetDiariesByLabel={onGetDiariesByLabel}
            />}
            {menu === SIDE_MENU.SETTING && <SettingPanel 
                username={username} 
                avatar={avatar} 
                labels={labels} 
                avatars={avatars}
                previousNavigation={previousNavigation}
                currentNavigation={currentNavigation}
                onSetNavigation={onSetNavigation}
                onUpdateAvatar={onUpdateAvatar}
                onClearStatus={onClearStatus}
            />}
        </div>
    );
}
export default PanelControls;