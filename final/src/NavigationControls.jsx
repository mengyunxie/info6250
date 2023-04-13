import {SIDE_MENU} from './constants';
import PasserbyNavigation from './PasserbyNavigation';
import MyDiaryNavigation from './MyDiaryNavigation';
import SettingNavigation from './SettingNavigation';

function NavigationControls({menu, onLogout, onSetNavigation}) {

    return (
        <div className="navigation-controls">
            {menu == SIDE_MENU.PASSERBY && <PasserbyNavigation onSetNavigation={onSetNavigation} />}
            {menu == SIDE_MENU.MYDIARY && <MyDiaryNavigation />}
            {menu == SIDE_MENU.SETTING && <SettingNavigation />}
            <button 
                type="button" 
                className="logout-to-submit" 
                onClick={onLogout}
            >
                <i className="gg-log-off"></i>
            </button>
        </div>
    );
}
export default NavigationControls;