import React, { useState } from "react";
import Style from "../styles/navBar/navBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes,faDumbbell, faHouse } from "@fortawesome/free-solid-svg-icons";

const NavBarPhone = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <div className={Style["nav-bar-phone"]}>
            <nav>

                <div className={Style["header"]}>
                    <Link to="/" className={Style["link"]}>
                        <p className={Style["title"]}>
                        
                        <span className={Style["title-one"]} > 
                        <FontAwesomeIcon icon={faDumbbell} /> Fit | world 
                        </span>
                        
                        </p>
                    </Link>
                    <button
                        className={Style["menu-toggle"]}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </div>
                {menuOpen && (
                    <div className={Style["nav-bar"]}>
                        <ul>
                            <li>
                                <Link to="/" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faHouse} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/recipes" onClick={toggleMenu}>
                                    Recipes
                                </Link>
                            </li>
                            <li>
                                <Link to="/calculator" onClick={toggleMenu}>
                                    Calculator
                                </Link>
                            </li>
                            <li>
                                <Link to="/workouts" onClick={toggleMenu}>
                                    Workouts
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

        </div>
    );
};

export default NavBarPhone;
