import Style from "../styles/NavBar/navBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <p className={Style["title"]}><span className={Style["title-one"]}>Fit </span><span className={Style["title-two"]}> | world</span></p>
            <div className={Style["nav-bar"]}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="recipes">Recipes</Link>
                        </li>
                        <li>
                            <Link to="trainer">Trainer</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
