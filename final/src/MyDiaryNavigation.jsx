import { SIDE_MENU, SIDE_MENU_SUB } from './constants';
function MyDiaryNavigation({
    labels, 
    onSetSubMenu,
    onSetCurrentLabel,
}) {
    const defaultOption = labels['all'].key;
    return (
        <div className="navigation-contents">
            <label className="navigation-select-label">
                <select 
                    className="navigation-select"
                    defaultValue={defaultOption}
                    onChange={ (e) => {
                        e.preventDefault();
                        onSetCurrentLabel({currentLabel: e.target.value});
                        // onSetSubMenu({subMenu: SIDE_MENU_SUB[SIDE_MENU.MYDIARY].DEFAULT});
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
            >
                <i className="gg-add"></i>
                <span className="add-diary-title">New Diary</span>
            </button>
        </div>
    );
}
export default MyDiaryNavigation;