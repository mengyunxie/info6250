import avatar from './images/avatar.png';

function Avatar({url=avatar, username}) {

    return (
        <div className="avatar-info">
            <img src={url} className="avatar-img" alt="avatar"/>
            <span className="avatar-username">{username}</span>
        </div>
    );
}
export default Avatar;