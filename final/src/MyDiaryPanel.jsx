import { useState } from 'react';
import {
    SIDE_MENU,
    ROUTER,
} from './constants';
import MyDiaryAdd from './MyDiaryAdd';
import MyDiaryDetail from './MyDiaryDetail';
import MyDiaryList from './MyDiaryList';
function MyDiaryPanel({
    labels,
    onSubmitDiary,
    onDeleteDiary,
    onUpdateDiary,
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
                    onDeleteDiary={onDeleteDiary}
                    onUpdateDiary={onUpdateDiary}
                />
            }
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT &&  <MyDiaryList 
                    diaries={diaries}
                    onSetRouter={onSetRouter}
                    onSetDiary={onSetDiary}
                />
            }
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].ADD &&  <MyDiaryAdd 
                    labels={labels}
                    previousRouter={previousRouter}
                    onSetRouter={onSetRouter}
                    onSubmitDiary={onSubmitDiary}
                />
            }
        </div>
    );
}
export default MyDiaryPanel;