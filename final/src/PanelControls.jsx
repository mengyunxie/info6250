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
    previousRouter,
    currentRouter,
    onSetRouter,
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
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                currentDiary={currentDiary}
                onSetCurrentDiary={onSetCurrentDiary}
                onSetRouter={onSetRouter}
                onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
                onGetPasserbyDiaries={onGetPasserbyDiaries}
            />}
            {menu === SIDE_MENU.MYDIARY && <MyDiaryPanel 
                diaries={diaries}
                labels={labels}
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                currentDiary={currentDiary}
                onSetCurrentDiary={onSetCurrentDiary}
                onSetRouter={onSetRouter}
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
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
                onUpdateAvatar={onUpdateAvatar}
            />}
        </div>
    );
}
export default PanelControls;