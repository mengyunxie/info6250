import { useState } from 'react';
import { DEFAULT_LABEL_KEY } from './constants';
function MyDiaryDetail({
    labels,
    currentDiary,
    previousRouter,
    onSetRouter,
    onDeleteDiary,
    onUpdateDiary,
    onGetDiariesByLabel,
}) {

    const [isEditing, setIsEditing] = useState(false);
    const [newDiary, setNewDiary] = useState(currentDiary);

    function formatDate(dateString) {
        const options = { 
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        onUpdateDiary({id: currentDiary.id, details: newDiary.details, labelKey: newDiary.label.key, isPasserby: newDiary.isPasserby });
        setIsEditing(false);
    }

    return (
        <>
            {isEditing && <form 
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
                                setIsEditing(false);
                                setNewDiary(currentDiary);
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
            }
            {!isEditing && <div className='mydiaries-details'>
                    <div className='mydiaries-details-tools'>
                        <button 
                            type="button"
                            className='go-back'
                            onClick={ (e) => {
                                e.preventDefault();
                                onSetRouter({currentRouter: previousRouter});
                                onGetDiariesByLabel(DEFAULT_LABEL_KEY);
                            }}
                        >
                            <i className="gg-arrow-left"></i>
                            <span className='go-back-title'>Go Back</span>
                        </button>
                        <button 
                            type="button"
                            className='to-delete'
                            onClick={ (e) => {
                                e.preventDefault();
                                onDeleteDiary(newDiary.id);
                            }}
                        >
                            <i className="gg-trash"></i>
                            <span className='to-delete-title'>Delete</span>
                        </button>
                        <button 
                            type="button"
                            className='to-edit'
                            onClick={ (e) => {
                                e.preventDefault();
                                setIsEditing(true);
                            }}
                        >
                            <i className="gg-pen"></i>
                            <span className='to-edit-title'>Edit</span>
                        </button>
                    </div>
                    <div className="mydiaries-details-info">
                        {newDiary.label.key != DEFAULT_LABEL_KEY && 
                            <span className={`mydiaries-details-label label-item-color ${newDiary.label.color}`} >{newDiary.label.key}</span>
                        }
                        <span className="mydiaries-details-date">{formatDate(newDiary.date)}</span>
                    </div>
                    <div className='mydiaries-details-content'>{newDiary.details}</div>
                </div>
            }
        </>
    );
}
export default MyDiaryDetail;