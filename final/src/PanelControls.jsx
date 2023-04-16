import {SIDE_MENU} from './constants';
import PasserbyPanel from './PasserbyPanel';
import MyDiaryPanel from './MyDiaryPanel';
import SettingPanel from './SettingPanel';

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
    avatars, 
    passerbyDiaries, 
    diaries,
}) {

    return (
        <div className="panel-controls">
            {menu === SIDE_MENU.PASSERBY && <PasserbyPanel 
                passerbyDiaries={passerbyDiaries}
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
            />}
            {menu === SIDE_MENU.MYDIARY && <MyDiaryPanel 
                diaries={diaries}
                labels={labels}
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
                onSubmitDiary={onSubmitDiary}
                onDeleteDiary={onDeleteDiary}
                onUpdateDiary={onUpdateDiary}
            />}
            {menu === SIDE_MENU.SETTING && <SettingPanel 
                username={username} 
                avatar={avatar} 
                labels={labels} 
                avatars={avatars}
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
            />}
        </div>
    );
}
export default PanelControls;