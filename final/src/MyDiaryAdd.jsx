import { useState } from 'react';
function MyDiaryAdd({
    labels,
    onSubmitDiary,
    previousRouter,
    onSetRouter,
}) {
    const [diary, setDiary] = useState({
        details: '',
        label: 'all',
        isPasserby: false
    });

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        onSubmitDiary({ details: diary.details, labelKey: diary.label, isPasserby: diary.isPasserby });
      }
    
    return (
        <form method="post" onSubmit={handleSubmit} className='mydiaries-form'>
            <div className='mydiaries-form-tools'>
                <button 
                    type="button"
                    className='go-back'
                    onClick={ (e) => {
                        e.preventDefault();
                        onSetRouter({currentRouter: previousRouter});
                    }}
                >
                    <i className="gg-arrow-left"></i>
                    <span className='go-back-title'>Go Back</span>
                </button>
                <button 
                    type="button"
                    className='to-edit'
                    onClick={ (e) => {
                        e.preventDefault();
                        onSetRouter({currentRouter: previousRouter});
                    }}
                >
                    <i className="gg-close"></i>
                    <span className='to-edit-title'>Cancel</span>
                </button>
                <button 
                    type="submit"
                    className='to-delete'
                >
                    <i className="gg-check"></i>
                    <span className='to-delete-title'>Save</span>
                </button>
            </div>    
            <div className="mydiaries-form-row">
                <span className='mydiaries-form-title'>Select Type: </span>
                <select 
                    className='mydiaries-form-select'
                    defaultValue={diary.label}
                    onChange={ (e) => {
                        e.preventDefault();
                        setDiary({...diary, label: e.target.value});
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
                    checked={diary.isPasserby} 
                    onChange={e => setDiary({...diary, isPasserby: e.target.checked})} 
                />
            </div>
            <div className='mydiaries-form-row form-textarea'>
                <span className='mydiaries-form-title'>Write your diary: </span>  
                <textarea 
                    name="diary"
                    className='mydiaries-form-input'
                    placeholder='Enter your diary here ...'
                    rows={10} 
                    value={diary.details} 
                    onChange={e => setDiary({...diary, details: e.target.value})} 
                />
            </div>
        </form>
    );
}
export default MyDiaryAdd;