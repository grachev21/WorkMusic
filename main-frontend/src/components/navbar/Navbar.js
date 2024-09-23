import "./styles.css";

import { NavLink } from "react-router-dom";

function Navbar() {
    const activeLink = "activ-link"
    const noactiveLink = "noactiv-link"
    return (
        <nav className="nav">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : noactiveLink}>
                Дом
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? activeLink : noactiveLink}>
                О нас 
            </NavLink>
            <NavLink to="/project" className={({isActive}) => isActive ? activeLink : noactiveLink}>
                Проекты
            </NavLink>
        </nav>

    );
    
}

export default Navbar;