import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/footer/Footer.module.css"
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={style["footer"]}>
            <div className={style["footer-container"]}>
                <div className={style["footer-logo"]}>
                    <h2>Fit World</h2>
                    <p>&copy; 2025 Todos los derechos reservados</p>
                </div>
                <div className={style["footer-links"]}>
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="recipes">recipes</Link></li>
                        <li><Link to="trainer">trainer</Link></li>
                        <li><Link to="trainer">trainer</Link></li>
                    </ul>
                </div>
                <div className={style["footer-social"]}>
                    <h3>Our networks</h3>
                    <div className={style["social-icons"]}>
                        <a href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://github.com/jdhernandezS1">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/9david-hernandez7/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>



                    </div>
                </div>
                <div className={style["footer-contact"]}>
                    <h3>Contact</h3>
                    <p>Email: david-hd97@hotmail.com</p>
                    <p>Tel: +123 456 789</p>
                    <a href="https://jdhernandezs1.github.io/R_Port/#/">
                        <p>Portfolio  <FontAwesomeIcon icon={faBriefcase} /></p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;





