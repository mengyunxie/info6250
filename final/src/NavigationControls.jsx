import {SIDE_MENU} from './constants';
import PasserbyNavigation from './PasserbyNavigation';
import MyDiaryNavigation from './MyDiaryNavigation';
import SettingNavigation from './SettingNavigation';

function NavigationControls({
    menu,
    currentNavigation,
    labels, 
    onLogout, 
    onSetNavigation, 
    onGetDiariesByLabel,
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {

    return (
        <div className="navigation-controls">
            {menu === SIDE_MENU.PASSERBY && <PasserbyNavigation 
                    onSetNavigation={onSetNavigation}
                    onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
                    onGetPasserbyDiaries={onGetPasserbyDiaries}
                />
            }
            {menu === SIDE_MENU.MYDIARY && <MyDiaryNavigation 
                labels={labels}
                currentNavigation={currentNavigation}
                onSetNavigation={onSetNavigation}
                onGetDiariesByLabel={onGetDiariesByLabel}
            />}
            {menu === SIDE_MENU.SETTING && <SettingNavigation onSetNavigation={onSetNavigation} />}
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