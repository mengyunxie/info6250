import PasserbyList from './PasserbyList';

function PasserbyPanel({
    passerbyDiaries,
}) {   
    return (
        <div className='passerby-panel'>
             <PasserbyList 
                passerbyDiaries={passerbyDiaries}
             /> 
        </div>
    );
}
export default PasserbyPanel;