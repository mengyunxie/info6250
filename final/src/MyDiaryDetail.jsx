import { 
    DEFAULT_LABEL_KEY, 
    SIDE_MENU,
    ROUTER, 
} from './constants';
function MyDiaryDetail({
currentDiary,
    onSetRouter,
    onDeleteDiary,
    onGetDiariesByLabel,
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
                        onSetRouter({currentRouter: ROUTER[SIDE_MENU.MYDIARY].DEFAULT});
                        onGetDiariesByLabel(DEFAULT_LABEL_KEY);
                    }}
                >
                    <i className="gg-arrow-left"></i>
                    <span className='go-back-title'>Go Back</span>
                </button>
                <button 
                    type="button"
                    className='to-delete'
                    onClick={ (e) => {
                        e.preventDefault();
                        onDeleteDiary(currentDiary.id);
                    }}
                >
                    <i className="gg-trash"></i>
                    <span className='to-delete-title'>Delete</span>
                </button>
                <button 
                    type="button"
                    className='to-edit'
                    onClick={ (e) => {
                        e.preventDefault();
                        onSetRouter({currentRouter: ROUTER[SIDE_MENU.MYDIARY].EDIT});
                    }}
                >
                    <i className="gg-pen"></i>
                    <span className='to-edit-title'>Edit</span>
                </button>
            </div>
            <div className="mydiaries-details-info">
                {currentDiary.label.key != DEFAULT_LABEL_KEY && 
                    <span className={`mydiaries-details-label label-item-color ${currentDiary.label.color}`} >{currentDiary.label.key}</span>
                }
                <span className="mydiaries-details-date">{formatDate(currentDiary.date)}</span>
            </div>
            <div className='mydiaries-details-content'>{currentDiary.details}</div>
        </div>
    );
}
export default MyDiaryDetail;