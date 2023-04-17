
import PasserbyItem from './PasserbyItem';
function PasserbyList({
    passerbyDiaries,
    onSetRouter,
    onSetCurrentDiary,
}) {   

    if(passerbyDiaries.length == 0) {
        return (
            <div className='no-data'>
                <i className="gg-danger"></i>
                <p>No Data</p>
            </div>
        );
    }
    
    return (
        <div className='passerby-panel'>
             { passerbyDiaries.map( diary => (
                <PasserbyItem 
                    diary={diary} 
                    key={diary.id}
                    onSetRouter={onSetRouter}
                    onSetCurrentDiary={onSetCurrentDiary}
                />
             ))} 
        </div>
    );
}
export default PasserbyList;