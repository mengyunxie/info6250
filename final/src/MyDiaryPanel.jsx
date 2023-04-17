import {
    SIDE_MENU,
    ROUTER,
} from './constants';
import MyDiaryAdd from './MyDiaryAdd';
import MyDiaryDetail from './MyDiaryDetail';
import MyDiaryList from './MyDiaryList';
import MyDiaryEdit from './MyDiaryEdit';

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
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].EDIT &&  <MyDiaryEdit 
                    labels={labels}
                    currentDiary={currentDiary}
                    previousRouter={previousRouter}
                    onSetRouter={onSetRouter}
                    onUpdateDiary={onUpdateDiary}
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
                    onGetDiariesByLabel={onGetDiariesByLabel}
                />
            }
        </div>
    );
}
export default MyDiaryPanel;