import { useState } from 'react';
import { SIDE_MENU, ROUTER } from './constants';

function SettingNavigation() {
    const [router, setRouter] = useState(ROUTER[SIDE_MENU.PASSERBY].DEFAULT);
    
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${router === ROUTER[SIDE_MENU.PASSERBY].DEFAULT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setRouter(ROUTER[SIDE_MENU.PASSERBY].DEFAULT);
                }}
            >
                <span>{ROUTER[SIDE_MENU.PASSERBY].DEFAULT}</span>
            </li>
        </ul>
    );
}
export default SettingNavigation;