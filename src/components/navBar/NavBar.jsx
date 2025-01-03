import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Recipes from "../../pages/Recipes";
import style from "../../styles/NavBar/navBar.module.css"
import styleMain from "../../styles/base.module.css"

const NavBar = () => {
  return (
    <Router>
      <div className={style.navBar}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className={styleMain.Main}>
        
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      </main>
    </Router>
  );
};

export default NavBar;
