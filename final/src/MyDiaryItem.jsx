import {
    SIDE_MENU,
    ROUTER,
} from './constants';
function MyDiaryItem({diary, onSetRouter, onSetDiary}) {
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
        <div 
            className="diary-item"
            onClick={ (e) => {
                e.preventDefault();
                onSetDiary(diary);
                onSetRouter({currentRouter: ROUTER[SIDE_MENU.MYDIARY].DETAIL});
            }}
        >
            <div className="diary-item-title">
                <span className={`diary-item-label label-item-color ${diary.label.color}`} ></span>
                <span className="diary-item-date">{formatDate(diary.date)}</span>
            </div>
            <div className="diary-item-intro">{diary.intro}</div>
        </div>
    );
}
export default MyDiaryItem;