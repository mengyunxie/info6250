import { useState } from 'react';
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
}) {
    const [diary, setDiary] = useState({});

    function onSetDiary(diary) {
        setDiary(diary);
    }

    return (
        <div className='passerby-panel'>
            {currentRouter === ROUTER[SIDE_MENU.PASSERBY].DETAIL &&  <PasserbyDetail 
                    diary={diary}
                    previousRouter={previousRouter}
                    currentRouter={currentRouter}
                    onSetRouter={onSetRouter}
                />
            }
            {currentRouter !== ROUTER[SIDE_MENU.PASSERBY].DETAIL &&  <PasserbyList 
                    passerbyDiaries={passerbyDiaries}
                    onSetRouter={onSetRouter}
                    onSetDiary={onSetDiary}
                />
            }
             
        </div>
    );
}
export default PasserbyPanel;