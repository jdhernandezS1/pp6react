import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Trainer from "./pages/Trainer";
import AppStyle from "./App.module.css"
import StyleMain from "./styles/base.module.css"
import Style from "./styles/NavBar/navBar.module.css"

const App = () => {
  return (
    <>
      <Router className={AppStyle.General}>
        <p className={Style.Title}><span className={Style.TitleOne}>Fit </span><span className={Style.TitleTwo}> | world</span></p>
        <div className={Style.navBar}>
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
        <main className={StyleMain.Main}>
          <div className={StyleMain.Routes}>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="trainer" element={<Trainer />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
};

export default App;
