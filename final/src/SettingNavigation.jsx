import { useState } from 'react';
import { SIDE_MENU, NAVIGATION } from './constants';

function SettingNavigation({onSetNavigation}) {
    const [navigation, setNavigation] = useState(NAVIGATION[SIDE_MENU.SETTING].DEFAULT);
    
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${navigation === NAVIGATION[SIDE_MENU.SETTING].DEFAULT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION[SIDE_MENU.SETTING].DEFAULT);
                    onSetNavigation({currentNavigation: NAVIGATION[SIDE_MENU.SETTING].DEFAULT});
                }}
            >
                <span>{NAVIGATION[SIDE_MENU.SETTING].DEFAULT}</span>
            </li>
            <li 
                className={`navigation-item ${navigation === NAVIGATION[SIDE_MENU.SETTING].ABOUT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION[SIDE_MENU.SETTING].ABOUT);
                    onSetNavigation({currentNavigation: NAVIGATION[SIDE_MENU.SETTING].ABOUT});
                }}
            >
                <span>{NAVIGATION[SIDE_MENU.SETTING].ABOUT}</span>
            </li>
        </ul>
    );
}
export default SettingNavigation;