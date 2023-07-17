import { Link } from "react-router-dom";
import './Header.scss'
import logo from '../../assets/logo.png';


export default function Header(){
    return(
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li><Link to="/" className="header__nav-link">Accueil</Link></li>
                    <li><Link to="/about" className="header__nav-link">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}