import {
    SIDE_MENU,
    ROUTER,
} from './constants';
import PasserbyDetail from './PasserbyDetail';
import PasserbyList from './PasserbyList';

function PasserbyPanel({
    passerbyDiaries,
    previousRouter,
    currentRouter,
    onSetRouter,
    currentDiary,
    onSetCurrentDiary,
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {

    return (
        <div className='passerby-panel'>
            {currentRouter === ROUTER[SIDE_MENU.PASSERBY].DETAIL &&  <PasserbyDetail 
                    previousRouter={previousRouter}
                    currentRouter={currentRouter}
                    currentDiary={currentDiary}
                    onSetRouter={onSetRouter}
                    onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
                    onGetPasserbyDiaries={onGetPasserbyDiaries}
                />
            }
            {currentRouter !== ROUTER[SIDE_MENU.PASSERBY].DETAIL &&  <PasserbyList 
                    passerbyDiaries={passerbyDiaries}
                    onSetRouter={onSetRouter}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            }
             
        </div>
    );
}
export default PasserbyPanel;