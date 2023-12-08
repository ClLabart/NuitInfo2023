import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer-content">
            <Link to="/About">Mention Légal</Link>
            <p>&copy; Site réalisé dans le cadre de la nuit de l'info</p>
            <span>
                Une réalisation de  &#160;
                <Link to="">Axel Boulfoul Morin</Link> & <Link to="">Chloé Labart</Link>
            </span>
        </div>
    );
};

export default Footer;
