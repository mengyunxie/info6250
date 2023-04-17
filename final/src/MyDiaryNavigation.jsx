import {
    SIDE_MENU,
    ROUTER,
    DEFAULT_LABEL_KEY,
} from './constants';

function MyDiaryNavigation({
    labels,
    currentRouter,
    onSetRouter,
    onGetDiariesByLabel,
}) {
    return (
        <div className="navigation-contents">
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT &&
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
                            onSetRouter({currentRouter: ROUTER[SIDE_MENU.MYDIARY].ADD});
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