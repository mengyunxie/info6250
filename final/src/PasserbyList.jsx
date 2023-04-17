
import PasserbyItem from './PasserbyItem';
function PasserbyList({
    passerbyDiaries,
    onSetNavigation,
    onSetCurrentDiary,
}) {   

    if(passerbyDiaries.length === 0) {
        return (
            <div className='no-data'>
                <i className="gg-danger"></i>
                <p>No Data</p>
            </div>
        );
    }
    
    return (
        <div className='passerby-list'>
             { passerbyDiaries.map( diary => (
                <PasserbyItem 
                    diary={diary} 
                    key={diary.id}
                    onSetNavigation={onSetNavigation}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
             ))} 
        </div>
    );
}
export default PasserbyList;