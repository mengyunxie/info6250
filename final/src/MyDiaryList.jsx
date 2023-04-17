import MyDiaryItem from './MyDiaryItem';
function MyDiaryList({
    diaries,
    onSetRouter,
    onSetCurrentDiary,
}) {
    if(diaries.length == 0) {
        return <div className='no-data'>
                    <i className="gg-danger"></i>
                    <p>No Data</p>
                </div>;
    }

    return (
        <div className='mydiary-panel'>
            { diaries.map( diary => (
                <MyDiaryItem 
                    diary={diary} 
                    key={diary.id}
                    onSetRouter={onSetRouter}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
            ))} 
        </div>
    );
}
export default MyDiaryList;