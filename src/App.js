import React from "react";
import { HashRouter as Router } from "react-router-dom";
import RoutesList from "./routes/Routes";
import NavBar from "./navBar/NavBar";
import NavBarPhone from "./navBar/NarBarPhone";
import Footer from "./footer/Footer";
import AppStyle from "./App.module.css"
import StyleMain from "./styles/base.module.css"


const App = () => {
  return (
    <>
      <Router className={AppStyle.General}>
        <NavBar />
        <NavBarPhone />
        <main className={StyleMain.Main}>
          <div className={StyleMain.Routes}>
            <RoutesList />
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
