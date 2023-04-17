import { useState } from 'react';
import { SIDE_MENU, ROUTER } from './constants';

function PasserbyNavigation({
    onSetRouter, 
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {
    const [currentRouter, setRouter] = useState(ROUTER[SIDE_MENU.PASSERBY].DEFAULT);

    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${currentRouter === ROUTER[SIDE_MENU.PASSERBY].DEFAULT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setRouter(ROUTER[SIDE_MENU.PASSERBY].DEFAULT);
                    onSetRouter({currentRouter: ROUTER[SIDE_MENU.PASSERBY].DEFAULT});
                    onGetPasserbyDiaries();
                }}
            >
                <span>{ROUTER[SIDE_MENU.PASSERBY].DEFAULT}</span>
            </li>
            <li 
                className={`navigation-item ${currentRouter === ROUTER[SIDE_MENU.PASSERBY].MINE ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setRouter(ROUTER[SIDE_MENU.PASSERBY].MINE);
                    onSetRouter({currentRouter: ROUTER[SIDE_MENU.PASSERBY].MINE});
                    onGetMyPasserbyDiaries();
                }}
            >
                <span>{ROUTER[SIDE_MENU.PASSERBY].MINE}</span>
            </li>
        </ul>
    );
}
export default PasserbyNavigation;