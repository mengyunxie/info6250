import {SIDE_MENU} from './constants';
import PasserbyPanel from './PasserbyPanel';
import MyDiaryPanel from './MyDiaryPanel';
import SettingPanel from './SettingPanel';

function PanelControls({
    username, 
    avatar, 
    menu,
    labels, 
    avatars, 
    passerbyDiaries, 
    diaries,
}) {

    return (
        <div className="panel-controls">
            {menu === SIDE_MENU.PASSERBY && <PasserbyPanel 
                passerbyDiaries={passerbyDiaries}
            />}
            {menu === SIDE_MENU.MYDIARY && <MyDiaryPanel 
                diaries={diaries}
            />}
            {menu === SIDE_MENU.SETTING && <SettingPanel 
                username={username} 
                avatar={avatar} 
                labels={labels} 
                avatars={avatars}
            />}
        </div>
    );
}
export default PanelControls;