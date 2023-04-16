import {
    SIDE_MENU,
    ROUTER,
} from './constants';

function MyDiaryNavigation({
    labels,
    currentLabel,
    currentRouter,
    onSetCurrentLabel,
    onSetRouter,
}) {
    return (
        <div className="navigation-contents">
            {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT &&
                <>
                    <label className="navigation-select-label">
                        <select 
                                className="navigation-select"
                                defaultValue={currentLabel}
                                onChange={ (e) => {
                                    e.preventDefault();
                                    onSetCurrentLabel({currentLabel: e.target.value});
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