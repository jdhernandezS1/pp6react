import Style from "../styles/navBar/navBar.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBarPhone = () => {
    return (
        <div className={Style["nav-bar-phone"]}>
            <Link to="/" className={Style["link"]}> <p className={Style["title"]}><span className={Style["title-one"]}>Fit </span><span className={Style["title-two"]}> | world</span></p></Link>
            <div className={Style["nav-bar"]}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </li>
                        <li>
                            <Link to="recipes"> <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                        </li>
                        <li>
                            <Link to="calculator"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </li>
                        <li>
                            <Link to="workouts"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default NavBarPhone;