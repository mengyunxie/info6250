import MyDiaryItem from './MyDiaryItem';
function MyDiaryList({diaries}) {
    return (
        <div className='mydiary-panel'>
            { Object.values(diaries).map( diary => (
                <MyDiaryItem diary={diary} key={diary.id}/>
            ))} 
        </div>
    );
}
export default MyDiaryList;