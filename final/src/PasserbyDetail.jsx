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
        <div className='passerby-details'>
            <div className='passerby-details-tools'>
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
            </div>
            <Avatar avatar={diary.avatar} username={diary.username} />
            <div className="passerby-details-date">{formatDate(diary.date)}</div>
            <div className='passerby-details-content'>{diary.details}</div>
        </div>
    );
}
export default PasserbyDetail;