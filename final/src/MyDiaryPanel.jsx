import { useState } from 'react';
import {
    SIDE_MENU,
    ROUTER,
} from './constants';
import MyDiaryDetail from './MyDiaryDetail';
import MyDiaryList from './MyDiaryList';
function MyDiaryPanel({
    diaries,
    previousRouter,
    currentRouter,
    onSetRouter,
}) {
    const [diary, setDiary] = useState({});

    function onSetDiary(diary) {
        setDiary(diary);
    }

    return (
        <div className='mydiary-panel'>
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DETAIL &&  <MyDiaryDetail 
                    diary={diary}
                    previousRouter={previousRouter}
                    currentRouter={currentRouter}
                    onSetRouter={onSetRouter}
                />
            }
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT &&  <MyDiaryList 
                    diaries={diaries}
                    onSetRouter={onSetRouter}
                    onSetDiary={onSetDiary}
                />
            }
        </div>
    );
}
export default MyDiaryPanel;