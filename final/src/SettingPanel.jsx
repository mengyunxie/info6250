import {
    SIDE_MENU,
    ROUTER,
} from './constants';

import Profile from './Profile';
import About from './About';

function SettingPanel({username, avatar, avatars, currentRouter, onUpdateAvatar, onClearStatus}) {
    return (
        <div className='setting-panel'>
            {currentRouter === ROUTER[SIDE_MENU.SETTING].DEFAULT && <Profile
                    username={username}
                    avatar={avatar}
                    avatars={avatars}
                    onUpdateAvatar={onUpdateAvatar}
                    onClearStatus={onClearStatus}
                />
            }
            {currentRouter === ROUTER[SIDE_MENU.SETTING].ABOUT && <About />}
        </div>
    );
}
export default SettingPanel;