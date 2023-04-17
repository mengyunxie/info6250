import MyDiaryItem from './MyDiaryItem';
function MyDiaryList({
    diaries,
    onSetNavigation,
    onSetCurrentDiary,
}) {
    if(diaries.length === 0) {
        return <div className='no-data'>
                    <i className="gg-danger"></i>
                    <p>No Data</p>
                </div>;
    }

    return (
        <div className='mydiary-list'>
            { diaries.map( diary => (
                <MyDiaryItem 
                    diary={diary} 
                    key={diary.id}
                    onSetNavigation={onSetNavigation}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            ))} 
        </div>
    );
}
export default MyDiaryList;