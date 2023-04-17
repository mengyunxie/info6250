import {
    SIDE_MENU,
    ROUTER,
    formatDate,
} from './constants';
import Avatar from './Avatar';

function PasserbyItem({diary, onSetRouter, onSetCurrentDiary}) {
    return (
        <div 
            className="passerby-item"
            onClick={ (e) => {
                e.preventDefault();
                onSetCurrentDiary(diary);
                onSetRouter({currentRouter: ROUTER[SIDE_MENU.PASSERBY].DETAIL});
            }}
        >
            <Avatar avatar={diary.avatar} username={diary.username} />
            <div className="passerby-item-intro">{diary.intro}</div>
            <div className="passerby-item-date">{formatDate(diary.date)}</div>
        </div>
    );
}
export default PasserbyItem;