import {SIDE_MENU} from './constants';
import PasserbyPanel from './PasserbyPanel';
import MyDiaryPanel from './MyDiaryPanel';
import SettingPanel from './SettingPanel';

function PanelControls({menu}) {

    return (
        <div className="panel-controls">
            {menu == SIDE_MENU.PASSERBY && <PasserbyPanel />}
            {menu == SIDE_MENU.MYDIARY && <MyDiaryPanel />}
            {menu == SIDE_MENU.SETTING && <SettingPanel />}
        </div>
    );
}
export default PanelControls;