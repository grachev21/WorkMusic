import "./styles.css";
import logo from "./img/Mixer.png";


function Logo() {
    return (
        <div className="Logo">
            <p>Mas</p>
                <img src={logo} alt="" />
            <p>Mix</p>
        </div>
    );
}

export default Logo;