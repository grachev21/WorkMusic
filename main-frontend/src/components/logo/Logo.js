import "./styles.css";
import logo from "./img/Mixer.png";


function Logo() {
    return (
        <div className="Logo">
            <p>Mas Mix</p>
            <div className="img-block">
                <div className="line-1"></div>
                <img src={logo} alt="" />
                <div className="line-2"></div>
            </div>
        </div>
    );
}

export default Logo;