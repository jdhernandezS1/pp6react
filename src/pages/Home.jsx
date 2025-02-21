import React from "react";
import styles from "../styles/home/home.module.css"
import Programs from "../components/home/Programs"
import fetchOpenAi from "../utils/fetchOpenAI"
const Home = () => {
  fetchOpenAi("");
  return (
    <div className={styles["first-section"]}>
      <h4 className={styles["home-title"]}>Transform Your Life Through Fitness</h4>
      <p className={styles["home-text"]}>Join our community of fitness enthusiast and begin your journey to a healthier stronger you</p>
      <iframe className={styles["home-video"]} src="https://www.youtube.com/embed/_JRefJH6N00?si=YJ3smqtYGtSmUf-o&amp;controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Programs />
    </div>
  );
};

export default Home;
