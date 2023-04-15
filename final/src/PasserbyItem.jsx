import {
    SIDE_MENU,
    ROUTER,
} from './constants';
import Avatar from './Avatar';

function PasserbyItem({diary, onSetRouter, onSetDiary}) {
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
            className="passerby-item"
            onClick={ (e) => {
                e.preventDefault();
                onSetDiary(diary);
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