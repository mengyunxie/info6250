import PasserbyItem from './PasserbyItem';
function PasserbyList({
    passerbyDiaries
}) {   

    return (
        <div className='passerby-panel'>
             { Object.values(passerbyDiaries).map( diary => (
                <PasserbyItem 
                    diary={diary} 
                    key={diary.id}
                    onClick={ (e) => {
                        e.preventDefault();
                        // call
                    }}
                />
             ))} 
        </div>
    );
}
export default PasserbyList;