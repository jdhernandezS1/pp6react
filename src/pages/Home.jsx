import React from "react";
import styles from "../styles/home/home.module.css"
const Home = () => {
  return (
    <div className={styles["first-section"]}>
      <h1 className={styles["home-title"]}>Welcome to Fit | WORLD</h1>
      <p>Find recipes, routines, calculate your daily calories and explore some options!</p>
      <iframe className={styles["home-video"]} src="https://www.youtube.com/embed/_JRefJH6N00?si=YJ3smqtYGtSmUf-o&amp;controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default Home;
