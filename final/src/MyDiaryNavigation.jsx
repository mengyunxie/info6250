import {
    SIDE_MENU,
    ROUTER,
} from './constants';

function MyDiaryNavigation({
    labels,
    currentLabel,
    currentRouter,
    onSetCurrentLabel,
}) {
    return (
        <div className="navigation-contents">
            <label className="navigation-select-label">
                {currentRouter === ROUTER[SIDE_MENU.MYDIARY].DEFAULT && <select 
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
                } 
            </label>
            <button 
                type="button" 
                className="add-diary"
            >
                <i className="gg-add"></i>
                <span className="add-diary-title">New Diary</span>
            </button>
        </div>
    );
}
export default MyDiaryNavigation;