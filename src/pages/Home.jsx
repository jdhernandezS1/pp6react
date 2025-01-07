import React from "react";
import styles from "../styles/home/home.module.css"
const Home = () => {
  return (
    <div className={styles["first-section"]}>
      <h1 className={styles["home-title"]}>Welcome to Fit | WORLD</h1>
      <p>Find recipes and explore delicious options!</p>
    </div>
  );
};

export default Home;
