import { useState } from 'react';
import {NAVIGATION} from './constants';

function SettingNavigation() {
    const [navigation, setNavigation] = useState(NAVIGATION.SETTING.PROFILE);
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${navigation === NAVIGATION.SETTING.PROFILE ? "focus" : ""}`}
                onClick={ (e) => {
                    e.preventDefault();
                    setNavigation(NAVIGATION.SETTING.PROFILE);
                }}
            >
                <span>{NAVIGATION.SETTING.PROFILE}</span>
            </li>
        </ul>
    );
}
export default SettingNavigation;