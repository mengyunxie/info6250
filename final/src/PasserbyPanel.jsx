import {
    SIDE_MENU,
    NAVIGATION,
} from './constants';
import PasserbyDetail from './PasserbyDetail';
import PasserbyList from './PasserbyList';

function PasserbyPanel({
    passerbyDiaries,
    previousNavigation,
    currentNavigation,
    onSetNavigation,
    currentDiary,
    onSetCurrentDiary,
    onGetMyPasserbyDiaries,
    onGetPasserbyDiaries,
}) {

    return (
        <div className='passerby-panel'>
            {currentNavigation === NAVIGATION[SIDE_MENU.PASSERBY].DETAIL &&  <PasserbyDetail 
                    previousNavigation={previousNavigation}
                    currentNavigation={currentNavigation}
                    currentDiary={currentDiary}
                    onSetNavigation={onSetNavigation}
                    onGetMyPasserbyDiaries={onGetMyPasserbyDiaries}
                    onGetPasserbyDiaries={onGetPasserbyDiaries}
                />
            }
            {currentNavigation !== NAVIGATION[SIDE_MENU.PASSERBY].DETAIL &&  <PasserbyList 
                    passerbyDiaries={passerbyDiaries}
                    onSetNavigation={onSetNavigation}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            }
             
        </div>
    );
}
export default PasserbyPanel;