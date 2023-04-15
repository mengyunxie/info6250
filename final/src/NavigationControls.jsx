import {SIDE_MENU} from './constants';
import PasserbyNavigation from './PasserbyNavigation';
import MyDiaryNavigation from './MyDiaryNavigation';
import SettingNavigation from './SettingNavigation';

function NavigationControls({
    menu,
    currentLabel,
    currentRouter,
    labels, 
    onLogout, 
    onSetRouter, 
    onSetCurrentLabel,
}) {

    return (
        <div className="navigation-controls">
            {menu === SIDE_MENU.PASSERBY && <PasserbyNavigation onSetRouter={onSetRouter} />}
            {menu === SIDE_MENU.MYDIARY && <MyDiaryNavigation 
                labels={labels}
                currentLabel={currentLabel}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
                onSetCurrentLabel={onSetCurrentLabel}
            />}
            {menu === SIDE_MENU.SETTING && <SettingNavigation />}
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