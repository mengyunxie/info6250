import {
    SIDE_MENU,
    ROUTER,
    DEFAULT_LABEL_KEY,
} from './constants';
function MyDiaryItem({diary, onSetRouter, onSetCurrentDiary}) {
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
                onSetCurrentDiary(diary);
                onSetRouter({currentRouter: ROUTER[SIDE_MENU.MYDIARY].DETAIL});
            }}
        >
            <p className="diary-item-date">{formatDate(diary.date)}</p>
            <p className="diary-item-intro">{diary.intro}</p>
            {diary.label.key != DEFAULT_LABEL_KEY && <span 
                    className={`diary-item-label label-item-color ${diary.label.color}`} 
                >
                    {diary.label.key}
                </span>
            }  
        </div>
    );
}
export default MyDiaryItem;