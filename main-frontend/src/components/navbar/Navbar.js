import "./styles.css";

import { NavLink } from "react-router-dom";

function Navbar() {
    const activeLink = "active-link"
    const noactiveLink = "noactive-link"
    return (
        <nav className="nav">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : noactiveLink}>
                ДОМ
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? activeLink : noactiveLink}>
                О НАС 
            </NavLink>
            <NavLink to="/project" className={({isActive}) => isActive ? activeLink : noactiveLink}>
                ПРОЕКТЫ
            </NavLink>
        </nav>

    );
    
}

export default Navbar;