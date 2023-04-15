import Avatar from './Avatar';
function MyDiaryDetail({
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
            <div className='details-tools'>
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
                <button 
                    type="button"
                    className='go-back'
                    onClick={ (e) => {
                        e.preventDefault();
                    }}
                >
                    <i className="gg-pen"></i>
                    <span className='go-back-title'>Edit</span>
                </button>
                <button 
                    type="button"
                    className='go-back'
                    onClick={ (e) => {
                        e.preventDefault();
                    }}
                >
                    <i className="gg-trash"></i>
                    <span className='go-back-title'>Delete</span>
                </button>
            </div>
            <Avatar avatar={diary.avatar}><span className="avatar-username">{diary.username}</span></Avatar>
            <div className="details-date">{formatDate(diary.date)}</div>
            <div className='details-content'>{diary.details}</div>
        </div>
    );
}
export default MyDiaryDetail;