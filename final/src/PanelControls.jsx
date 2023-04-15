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
                previousRouter={previousRouter}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
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