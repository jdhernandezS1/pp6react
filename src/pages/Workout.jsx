import React from "react";
import styles from "../styles/workout/workout.module.css";
import Exercises from "../components/workout/Exercises";

const Workouts = () => {



  return (
    <div className={styles["first-section"]}>
      <hr className={styles["banner"]} />
      <h1>Workout Planner</h1>
      <Exercises />
    </div>
  );
};

export default Workouts;
