import Avatar from './Avatar';
function PasserbyDetail({
    diary,
    previousRouter,
    onSetRouter,
}) {

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
        <div className='details'>
            <button 
                type="button"
                className='go-back'
                onClick={ (e) => {
                    e.preventDefault();
                    onSetRouter({currentRouter: previousRouter});
                }}
            >
                <i className="gg-arrow-left"></i>
                <span className='go-back-title'>Go Back</span>
            </button>
            <Avatar avatar={diary.avatar}><span className="avatar-username">{diary.username}</span></Avatar>
            <div className="details-date">{formatDate(diary.date)}</div>
            <div className='details-content'>{diary.details}</div>
        </div>
    );
}
export default PasserbyDetail;