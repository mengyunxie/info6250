import { useState } from 'react';
import { SIDE_MENU, ROUTER } from './constants';

function SettingNavigation({onSetRouter}) {
    const [router, setRouter] = useState(ROUTER[SIDE_MENU.SETTING].DEFAULT);
    
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${router === ROUTER[SIDE_MENU.SETTING].DEFAULT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setRouter(ROUTER[SIDE_MENU.SETTING].DEFAULT);
                    onSetRouter({currentRouter: ROUTER[SIDE_MENU.SETTING].DEFAULT});
                }}
            >
                <span>{ROUTER[SIDE_MENU.SETTING].DEFAULT}</span>
            </li>
            <li 
                className={`navigation-item ${router === ROUTER[SIDE_MENU.SETTING].ABOUT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setRouter(ROUTER[SIDE_MENU.SETTING].ABOUT);
                    onSetRouter({currentRouter: ROUTER[SIDE_MENU.SETTING].ABOUT});
                }}
            >
                <span>{ROUTER[SIDE_MENU.SETTING].ABOUT}</span>
            </li>
        </ul>
    );
}
export default SettingNavigation;