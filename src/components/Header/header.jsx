import { NavLink } from "react-router-dom";
import './Header.scss'
import logo from '../../assets/kasa-logo.svg';


export default function Header(){
    return(
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li><NavLink to="/" className="header__nav-link">Accueil</NavLink></li>
                    <li><NavLink to="/about" className="header__nav-link">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}