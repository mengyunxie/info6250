
function Avatar({avatar, username}) {
    const name = avatar?.url ? avatar.url : 'avatar.png';
    const url = `./images/${name}`;
    console.log(url);
    return (
        <div className="avatar-info">
            <img src={url} className="avatar-img" alt="avatar"/>
            <span className="avatar-username">{username}</span>
        </div>
    );
}
export default Avatar;