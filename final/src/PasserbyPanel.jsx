import PasserbyItem from './PasserbyItem';
function PasserbyPanel({passerbyDiaries}) {   
    return (
        <div className='passerby-panel'>
             { Object.values(passerbyDiaries).map( diary => (
                <PasserbyItem diary={diary} key={diary.id}/>
             ))} 
        </div>
    );
}
export default PasserbyPanel;