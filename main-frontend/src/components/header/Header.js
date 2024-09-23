import "./styles.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import SwitchTheme from "../switch_theme/SwitchTheme";


function Header() {
    return (
        <div className="Header">
            <Logo />
            <Navbar />
            <SwitchTheme />
        </div>
    );
    
}

export default Header;