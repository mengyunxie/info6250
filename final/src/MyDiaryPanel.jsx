import DiaryItem from './DiaryItem';
function MyDiaryPanel({diaries}) {
    return (
        <div className='mydiary-panel'>
            { Object.values(diaries).map( diary => (
                <DiaryItem diary={diary} key={diary.id}/>
            ))} 
        </div>
    );
}
export default MyDiaryPanel;