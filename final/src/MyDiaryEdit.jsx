import { useState } from 'react';
function MyDiaryEdit({
    labels,
    currentDiary,
    previousRouter,
    onSetRouter,
    onUpdateDiary,
}) {

    const [newDiary, setNewDiary] = useState(currentDiary);

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        onUpdateDiary({id: currentDiary.id, details: newDiary.details, labelKey: newDiary.label.key, isPasserby: newDiary.isPasserby });
    }

    return (
        <form 
            method="post" 
            onSubmit={handleSubmit} 
            className='mydiaries-form'
        >
            <div className='mydiaries-form-tools'>
                <button 
                    type="button"
                    className='to-cancel'
                    onClick={ (e) => {
                        e.preventDefault();
                        // setNewDiary(currentDiary);
                        onSetRouter({currentRouter: previousRouter});
                    }}
                >
                    <i className="gg-close"></i>
                    <span className='to-cancel-title'>Cancel</span>
                </button>
                <button 
                    type="submit"
                    className='to-submit'
                >
                    <i className="gg-check"></i>
                    <span className='to-submit-title'>Save</span>
                </button>
            </div>    
            <div className="mydiaries-form-row">
                <span className='mydiaries-form-title'>Select Type: </span>
                <select 
                    className='mydiaries-form-select'
                    defaultValue={newDiary.label.key}
                    onChange={ (e) => {
                        e.preventDefault();
                        setNewDiary({...newDiary, label: e.target.value});
                    }}
                >
                    { Object.values(labels).map( label => (
                        <option 
                            key={label.key}
                            value={label.key}
                        >
                            {label.key}
                        </option>
                    ))}
                </select>
            </div>
            <div className='mydiaries-form-row'>
                <span className='mydiaries-form-title'>Post to Passerby: </span>
                <input 
                    type="checkbox" 
                    name="isPasserby" 
                    className='mydiaries-form-checkbox'
                    checked={newDiary.isPasserby} 
                    onChange={e => setNewDiary({...newDiary, isPasserby: e.target.checked})} 
                />
            </div>
            <div className='mydiaries-form-row form-textarea'>
                <span className='mydiaries-form-title'>Write your diary: </span>  
                <textarea 
                    name="diary"
                    className='mydiaries-form-input'
                    placeholder='Enter your diary here ...'
                    rows={20} 
                    value={newDiary.details} 
                    onChange={e => setNewDiary({...newDiary, details: e.target.value})} 
                />
            </div>
        </form>
    );
}
export default MyDiaryEdit;