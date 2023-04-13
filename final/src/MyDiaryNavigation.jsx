import { NAVIGATION } from './constants';
function MyDiaryNavigation({labels, onSetNavigation}) {
    const defaultOption = labels['all'].key;
    return (
        <div className="navigation-contents">
            <label className="navigation-select-label">
                <select 
                    className="navigation-select"
                    defaultValue={defaultOption}
                    onChange={ (e) => {
                        e.preventDefault();
                        onSetNavigation({navigation: NAVIGATION.MYDIARY.LABEL, param: {label: e.target.value}});
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