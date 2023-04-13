import { useState } from 'react';
import {NAVIGATION} from './constants';

function PasserbyNavigation({onSetNavigation}) {
    const [navigation, setNavigation] = useState(NAVIGATION.PASSERBY.LATEST);

    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${navigation === NAVIGATION.PASSERBY.LATEST ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION.PASSERBY.LATEST);
                    onSetNavigation({navigation: NAVIGATION.PASSERBY.LATEST});
                }}
            >
                <span>{NAVIGATION.PASSERBY.LATEST}</span>
            </li>
            <li 
                className={`navigation-item ${navigation === NAVIGATION.PASSERBY.MINE ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION.PASSERBY.MINE);
                    onSetNavigation({navigation: NAVIGATION.PASSERBY.MINE});
                }}
            >
                <span>{NAVIGATION.PASSERBY.MINE}</span>
            </li>
        </ul>
    );
}
export default PasserbyNavigation;