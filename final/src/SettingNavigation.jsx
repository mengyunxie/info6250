import { useState } from 'react';
import {NAVIGATION} from './constants';

function SettingNavigation() {
    const [navigation, setNavigation] = useState(NAVIGATION.SETTING.PROFILE);
    return (
        <ul className="navigation-contents">
            <li 
                className={`navigation-item ${navigation === NAVIGATION.SETTING.PROFILE ? "focus" : ""}`}
                onClick={ (e) => {
                    setNavigation(NAVIGATION.SETTING.PROFILE)
                }}
            >
                <span>{NAVIGATION.SETTING.PROFILE}</span>
            </li>
            <li 
                className={`navigation-item ${navigation === NAVIGATION.SETTING.LABEL ? "focus" : ""}`}
                onClick={ (e) => {
                    setNavigation(NAVIGATION.SETTING.LABEL)
                }}
            >
                <span>{NAVIGATION.SETTING.LABEL}</span>
            </li>
        </ul>
    );
}
export default SettingNavigation;