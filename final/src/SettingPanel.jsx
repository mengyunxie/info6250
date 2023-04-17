import {
    SIDE_MENU,
    NAVIGATION,
} from './constants';

import Profile from './Profile';
import About from './About';

function SettingPanel({username, avatar, avatars, currentNavigation, onUpdateAvatar, onClearStatus}) {
    return (
        <div className='setting-panel'>
            {currentNavigation === NAVIGATION[SIDE_MENU.SETTING].DEFAULT && <Profile
                    username={username}
                    avatar={avatar}
                    avatars={avatars}
                    onUpdateAvatar={onUpdateAvatar}
                    onClearStatus={onClearStatus}
                />
            }
            {currentNavigation === NAVIGATION[SIDE_MENU.SETTING].ABOUT && <About />}
        </div>
    );
}
export default SettingPanel;