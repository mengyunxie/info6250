import {SIDE_MENU} from './constants';

function SideMenu({menu, onSetMenu}) {

    return (
        <div className="side-menu">
            <ul className="side-menu-contents">
                <li 
                    className={`side-menu-item ${menu == SIDE_MENU.PASSERBY ? "focus" : ""}`}
                    onClick={ (e) => {
                        e.preventDefault();
                        onSetMenu(SIDE_MENU.PASSERBY);
                    }}
                >
                    <span className="side-menu-icon"><i className="gg-data"></i></span>
                    <span>{SIDE_MENU.PASSERBY}</span>
                </li>
                <li
                    className={`side-menu-item ${menu == SIDE_MENU.MYDIARY ? "focus" : ""}`}
                    onClick={ (e) => {
                        e.preventDefault();
                        onSetMenu(SIDE_MENU.MYDIARY);
                    }}
                >
                    <span className="side-menu-icon"><i className="gg-details-more"></i></span>
                    <span>{SIDE_MENU.MYDIARY}</span>
                </li>
                <li
                    className={`side-menu-item ${menu == SIDE_MENU.SETTING ? "focus" : ""}`}
                    onClick={ (e) => {
                        e.preventDefault();
                        onSetMenu(SIDE_MENU.SETTING);
                    }}
                >
                    <span className="side-menu-icon"><i className="gg-layout-grid-small"></i></span>
                    <span>{SIDE_MENU.SETTING}</span>
                </li>
            </ul>
        </div>
    );
}
export default SideMenu;