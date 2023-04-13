import Avatar from './Avatar';
function SettingPanel({username, avatar}) {
    return (
        <div className='setting-panel'>
            <div className="profile">
                <div className="profile-username">
                    <span className="profile-title">Username: </span>
                    <span>{username}</span>
                </div>
                <div className="profile-avatar">
                    <span className="profile-title">Your Avatar: </span>
                    <Avatar avatar={avatar} />
                </div>
            </div> 
        </div>
    );
}
export default SettingPanel;