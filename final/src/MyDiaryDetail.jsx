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
        <div className='mydiaries-details'>
            <div className='mydiaries-details-tools'>
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
                    className='to-edit'
                    onClick={ (e) => {
                        e.preventDefault();
                    }}
                >
                    <i className="gg-pen"></i>
                    <span className='to-edit-title'>Edit</span>
                </button>
                <button 
                    type="button"
                    className='to-delete'
                    onClick={ (e) => {
                        e.preventDefault();
                    }}
                >
                    <i className="gg-trash"></i>
                    <span className='to-delete-title'>Delete</span>
                </button>
            </div>
            
            <div className="mydiaries-details-info">
                <span className={`mydiaries-details-label label-item-color ${diary.label.color}`} ></span>
                <span className="mydiaries-details-date">{formatDate(diary.date)}</span>
            </div>
            <div className='mydiaries-details-content'>{diary.details}</div>
        </div>
    );
}
export default MyDiaryDetail;