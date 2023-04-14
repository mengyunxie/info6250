import { useState } from 'react';
import { SIDE_MENU, SIDE_MENU_SUB } from './constants';

function SettingNavigation() {
    const [subMenu, setSubMenu] = useState(SIDE_MENU_SUB[SIDE_MENU.PASSERBY].DEFAULT);
    
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${subMenu === SIDE_MENU_SUB[SIDE_MENU.PASSERBY].DEFAULT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setSubMenu(SIDE_MENU_SUB[SIDE_MENU.PASSERBY].DEFAULT);
                }}
            >
                <span>{SIDE_MENU_SUB[SIDE_MENU.PASSERBY].DEFAULT}</span>
            </li>
        </ul>
    );
}
export default SettingNavigation;