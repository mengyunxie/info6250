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
    currentDiary,
    onSetCurrentDiary,
    onSetRouter,
    onGetDiariesByLabel,
}) {

    return (
        <div className='mydiary-panel'>
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DETAIL &&  <MyDiaryDetail 
                    labels={labels}
                    currentDiary={currentDiary}
                    previousRouter={previousRouter}
                    currentRouter={currentRouter}
                    onSetRouter={onSetRouter}
                    onDeleteDiary={onDeleteDiary}
                    onUpdateDiary={onUpdateDiary}
                    onGetDiariesByLabel={onGetDiariesByLabel}
                />
            }
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT &&  <MyDiaryList 
                    diaries={diaries}
                    onSetRouter={onSetRouter}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            }
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].ADD &&  <MyDiaryAdd 
                    labels={labels}
                    previousRouter={previousRouter}
                    onSetRouter={onSetRouter}
                    onSubmitDiary={onSubmitDiary}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            }
        </div>
    );
}
export default MyDiaryPanel;