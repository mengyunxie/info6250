import MyDiaryItem from './MyDiaryItem';
function MyDiaryList({
    diaries,
    onSetRouter,
    onSetDiary,
}) {
    return (
        <div className='mydiary-panel'>
            { Object.values(diaries).map( diary => (
                <MyDiaryItem 
                    diary={diary} 
                    key={diary.id}
                    onSetRouter={onSetRouter}
                    onSetDiary={onSetDiary}
                />
            ))} 
        </div>
    );
}
export default MyDiaryList;