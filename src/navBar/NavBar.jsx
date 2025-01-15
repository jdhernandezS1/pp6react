import Style from "../styles/navBar/navBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/" className={Style["link"]}> <p  className={Style["title"]}><span className={Style["title-one"]}>Fit </span><span className={Style["title-two"]}> | world</span></p></Link>
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
                            <Link to="calculator">Calculator</Link>
                        </li>
                        <li>
                            <Link to="workouts">Workouts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
