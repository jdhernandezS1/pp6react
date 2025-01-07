import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Tu Empresa</h2>
                    <p>&copy; 2025 Todos los derechos reservados</p>
                </div>
                {/* <div className="footer-links">
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="recipes">recipes</Link></li>
                        <li><Link to="trainer">trainer</Link></li>
                        <li><Link to="trainer">trainer</Link></li>
                    </ul>
                </div> */}
                <div className="footer-social">
                    <h3>Conéctate</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>Email: @.com</p>
                    <p>Tel: +123 456 789</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;





