import './Footer.scss';
import logoWhite from '../../assets/kasa-logo-white.png'

function Footer(){
    return(
        <footer className="footer">
            <img src={logoWhite} className="footer__logo" alt="logo Kasa en blanc sur fond noir" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;