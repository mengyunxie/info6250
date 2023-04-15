
import PasserbyItem from './PasserbyItem';
function PasserbyList({
    passerbyDiaries,
    onSetRouter,
    onSetDiary,
}) {   

    return (
        <div className='passerby-panel'>
             { Object.values(passerbyDiaries).map( diary => (
                <PasserbyItem 
                    diary={diary} 
                    key={diary.id}
                    onSetRouter={onSetRouter}
                    onSetDiary={onSetDiary}
                />
             ))} 
        </div>
    );
}
export default PasserbyList;