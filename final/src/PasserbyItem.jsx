import {
    SIDE_MENU,
    NAVIGATION,
    formatDate,
} from './constants';
import Avatar from './Avatar';

function PasserbyItem({diary, onSetNavigation, onSetCurrentDiary}) {
    return (
        <div 
            className="passerby-item"
            onClick={ (e) => {
                e.preventDefault();
                onSetCurrentDiary(diary);
                onSetNavigation({currentNavigation: NAVIGATION[SIDE_MENU.PASSERBY].DETAIL});
            }}
        >
            <Avatar avatar={diary.avatar} username={diary.username} />
            <div className="passerby-item-intro">{diary.intro}</div>
            <div className="passerby-item-date">{formatDate(diary.date)}</div>
        </div>
    );
}
export default PasserbyItem;