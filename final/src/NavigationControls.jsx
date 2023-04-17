import {SIDE_MENU} from './constants';
import PasserbyNavigation from './PasserbyNavigation';
import MyDiaryNavigation from './MyDiaryNavigation';
import SettingNavigation from './SettingNavigation';

function NavigationControls({
    menu,
    currentRouter,
    labels, 
    onLogout, 
    onSetRouter, 
    onGetDiariesByLabel,
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {

    return (
        <div className="navigation-controls">
            {menu === SIDE_MENU.PASSERBY && <PasserbyNavigation 
                    onSetRouter={onSetRouter}
                    onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
                    onGetPasserbyDiaries={onGetPasserbyDiaries}
                />
            }
            {menu === SIDE_MENU.MYDIARY && <MyDiaryNavigation 
                labels={labels}
                currentRouter={currentRouter}
                onSetRouter={onSetRouter}
                onGetDiariesByLabel={onGetDiariesByLabel}
            />}
            {menu === SIDE_MENU.SETTING && <SettingNavigation onSetRouter={onSetRouter} />}
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