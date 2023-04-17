import { useState } from 'react';

import { DEFAULT_LABEL_KEY } from './constants';

function MyDiaryAdd({
    labels,
    onSubmitDiary,
    previousRouter,
    onSetRouter,
}) {
    const [diary, setDiary] = useState({
        details: '',
        label: DEFAULT_LABEL_KEY,
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
                    className='to-cancel'
                    onClick={ (e) => {
                        e.preventDefault();
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
                    rows={20} 
                    value={diary.details} 
                    onChange={e => setDiary({...diary, details: e.target.value})} 
                />
            </div>
        </form>
    );
}
export default MyDiaryAdd;