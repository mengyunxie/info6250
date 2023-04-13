import Avatar from './Avatar';

function PasserbyItem({diary}) {
    function formatDate(dateString) {
        const options = { 
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    return (
        <div className="passerby-item">
            <Avatar avatar={diary.avatar}><span className="avatar-username">{diary.username}</span></Avatar>
            <div className="passerby-item-intro">{diary.intro}</div>
            <div className="passerby-item-date">{formatDate(diary.date)}</div>
        </div>
    );
}
export default PasserbyItem;