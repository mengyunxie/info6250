import { useState } from 'react';
import { SIDE_MENU, NAVIGATION } from './constants';

function PasserbyNavigation({
    onSetNavigation, 
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {
    const [navigation, setNavigation] = useState(NAVIGATION[SIDE_MENU.PASSERBY].DEFAULT);

    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${navigation === NAVIGATION[SIDE_MENU.PASSERBY].DEFAULT ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION[SIDE_MENU.PASSERBY].DEFAULT);
                    onSetNavigation({currentNavigation: NAVIGATION[SIDE_MENU.PASSERBY].DEFAULT});
                    onGetPasserbyDiaries();
                }}
            >
                <span>{NAVIGATION[SIDE_MENU.PASSERBY].DEFAULT}</span>
            </li>
            <li 
                className={`navigation-item ${navigation === NAVIGATION[SIDE_MENU.PASSERBY].MINE ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION[SIDE_MENU.PASSERBY].MINE);
                    onSetNavigation({currentNavigation: NAVIGATION[SIDE_MENU.PASSERBY].MINE});
                    onGetMyPasserbyDiaries();
                }}
            >
                <span>{NAVIGATION[SIDE_MENU.PASSERBY].MINE}</span>
            </li>
        </ul>
    );
}
export default PasserbyNavigation;