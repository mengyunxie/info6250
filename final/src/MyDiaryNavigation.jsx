function MyDiaryNavigation() {
    return (
        <div className="navigation-contents">
            <label className="navigation-select-label">
                <select className="navigation-select">
                    <option className="navigation-select-item" value="someOption">Some option</option>
                    <option className="navigation-select-item" value="otherOption">Other option</option>
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