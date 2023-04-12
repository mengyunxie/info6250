import { useState } from 'react';
import {NAVIGATION} from './constants';

function PasserbyNavigation() {
    const [navigation, setNavigation] = useState(NAVIGATION.PASSERBY.LATEST);
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${navigation === NAVIGATION.PASSERBY.LATEST ? "focus" : ""}`}
                onClick={ (e) => {
                    setNavigation(NAVIGATION.PASSERBY.LATEST)
                }}
            >
                <span>{NAVIGATION.PASSERBY.LATEST}</span>
            </li>
            <li 
                className={`navigation-item ${navigation === NAVIGATION.PASSERBY.HOT ? "focus" : ""}`}
                onClick={ (e) => {
                    setNavigation(NAVIGATION.PASSERBY.HOT)
                }}
            >
                <span>{NAVIGATION.PASSERBY.HOT}</span>
            </li>
            <li 
                className={`navigation-item ${navigation === NAVIGATION.PASSERBY.MINE ? "focus" : ""}`}
                onClick={ (e) => {
                    setNavigation(NAVIGATION.PASSERBY.MINE)
                }}
            >
                <span>{NAVIGATION.PASSERBY.MINE}</span>
            </li>
        </ul>
    );
}
export default PasserbyNavigation;