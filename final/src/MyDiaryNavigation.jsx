import {
    SIDE_MENU,
    NAVIGATION,
    DEFAULT_LABEL_KEY,
} from './constants';

function MyDiaryNavigation({
    labels,
    currentNavigation,
    onSetNavigation,
    onGetDiariesByLabel,
}) {
    return (
        <div className="navigation-contents">
            {currentNavigation === NAVIGATION[SIDE_MENU.MYDIARY].DEFAULT &&
                <>
                    <label className="navigation-select-label">
                        <select 
                                className="navigation-select"
                                defaultValue={DEFAULT_LABEL_KEY}
                                onChange={ (e) => {
                                    e.preventDefault();
                                    onGetDiariesByLabel(e.target.value);
                                }}
                            >
                                { Object.values(labels).map( label => (
                                    <option 
                                        key={label.key} 
                                        className="navigation-select-item" 
                                        value={label.key}
                                    >
                                        {label.key}
                                    </option>
                                ))}
                            </select>
                        
                    </label>
                    <button 
                        type="button" 
                        className="add-diary"
                        onClick={ (e) => {
                            e.preventDefault();
                            onSetNavigation({currentNavigation: NAVIGATION[SIDE_MENU.MYDIARY].ADD});
                        }}
                    >
                        <i className="gg-add"></i>
                        <span className="add-diary-title">New Diary</span>
                    </button>
                </>
            } 
        </div>
    );
}
export default MyDiaryNavigation;