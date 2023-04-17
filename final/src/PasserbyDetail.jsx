import {
    SIDE_MENU,
    ROUTER,
  } from './constants';
import Avatar from './Avatar';
function PasserbyDetail({
    previousRouter,
    onSetRouter,
    currentDiary,
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
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
                        if(previousRouter === ROUTER[SIDE_MENU.PASSERBY].DEFAULT) {
                            onGetPasserbyDiaries();
                        }
                        if(previousRouter === ROUTER[SIDE_MENU.PASSERBY].MINE) {
                            onGetMyPasserbyDiaries();
                        }
                    }}
                >
                    <i className="gg-arrow-left"></i>
                    <span className='go-back-title'>Go Back</span>
                </button>
            </div>
            <Avatar avatar={currentDiary.avatar} username={currentDiary.username} />
            <div className="passerby-details-date">{formatDate(currentDiary.date)}</div>
            <div className='passerby-details-content'>{currentDiary.details}</div>
        </div>
    );
}
export default PasserbyDetail;