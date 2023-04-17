import {
    SIDE_MENU,
    NAVIGATION,
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
    previousNavigation,
    currentNavigation,
    currentDiary,
    onSetCurrentDiary,
    onSetNavigation,
    onGetDiariesByLabel,
}) {

    return (
        <div className='mydiary-panel'>
            {currentNavigation === NAVIGATION[SIDE_MENU.MYDIARY].DETAIL &&  <MyDiaryDetail 
                    labels={labels}
                    currentDiary={currentDiary}
                    previousNavigation={previousNavigation}
                    onSetNavigation={onSetNavigation}
                    onDeleteDiary={onDeleteDiary}
                    onUpdateDiary={onUpdateDiary}
                    onGetDiariesByLabel={onGetDiariesByLabel}
                />
            }
            {currentNavigation === NAVIGATION[SIDE_MENU.MYDIARY].EDIT &&  <MyDiaryEdit 
                    labels={labels}
                    currentDiary={currentDiary}
                    previousNavigation={previousNavigation}
                    onSetNavigation={onSetNavigation}
                    onUpdateDiary={onUpdateDiary}
                />
            }
            {currentNavigation === NAVIGATION[SIDE_MENU.MYDIARY].DEFAULT &&  <MyDiaryList 
                    diaries={diaries}
                    onSetNavigation={onSetNavigation}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            }
            {currentNavigation === NAVIGATION[SIDE_MENU.MYDIARY].ADD &&  <MyDiaryAdd 
                    labels={labels}
                    previousNavigation={previousNavigation}
                    onSetNavigation={onSetNavigation}
                    onSubmitDiary={onSubmitDiary}
                    onSetCurrentDiary={onSetCurrentDiary}
                    onGetDiariesByLabel={onGetDiariesByLabel}
                />
            }
        </div>
    );
}
export default MyDiaryPanel;