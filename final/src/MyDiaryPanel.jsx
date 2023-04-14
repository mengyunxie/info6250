import MyDiaryList from './MyDiaryList';
function MyDiaryPanel({diaries}) {
    return (
        <div className='mydiary-panel'>
            <MyDiaryList diaries={diaries} />
        </div>
    );
}
export default MyDiaryPanel;