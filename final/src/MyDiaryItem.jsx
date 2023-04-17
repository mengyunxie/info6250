import {
    SIDE_MENU,
    ROUTER,
    DEFAULT_LABEL_KEY,
    formatDate,
} from './constants';
function MyDiaryItem({diary, onSetRouter, onSetCurrentDiary}) {

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
            {diary.label.key !== DEFAULT_LABEL_KEY && <span 
                    className={`diary-item-label label-item-color ${diary.label.color}`} 
                >
                    {diary.label.key}
                </span>
            }  
        </div>
    );
}
export default MyDiaryItem;