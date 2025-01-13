import React, { useState } from "react";
import workoutsData from "../data/workout.json";
import styles from "../styles/workout/workout.module.css";


const Workouts = () => {
  const [level, setLevel] = useState("beginner");
  const [type, setType] = useState("cardio");

  // Filtrar rutinas basadas en el nivel y el tipo
  const filteredWorkouts = workoutsData.routines.filter(
    (routine) => routine.level === level && routine.type === type
  );

  const renderExercises = (routine) => {
    if (type === "strength" && routine.muscle_groups) {
      return Object.keys(routine.muscle_groups).map((group) => (
        <div key={group} className={styles["first-section"]}>
          <h4>{group.charAt(0).toUpperCase() + group.slice(1)}</h4>
          <div className={styles["exercises-grid"]}>
            {routine.muscle_groups[group].map((exercise, index) => (
              <div className={styles["exercises-card"]} key={index}>
                <hr />
                <p><strong>{exercise.name}</strong>
                {exercise.reps && ` - Reps: ${exercise.reps}`}
                {exercise.duration && ` - Duration: ${exercise.duration}`}
                </p>                
                <img className={styles["exercises-picture"]} src={exercise.image}  alt={exercise.name}></img>
              </div>
            ))}
          </div>
        </div>
      ));
    } else {
      return (
        <div className={styles["exercises-grid"]}>
          {routine.exercises.map((exercise, index) => (
            <div className={styles["exercises-card"]} key={index}>
              <strong>{exercise.name}</strong>
              {exercise.reps && ` - Reps: ${exercise.reps}`}
              {exercise.duration && ` - Duration: ${exercise.duration}`}
              <img className={styles["exercises-picture"]} src={exercise.image}  alt={exercise.name}></img>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div  className={styles["first-section"]}>
      <h1>Workout Planner</h1>
      <div className="controls">
        <label htmlFor="level">Select Level:</label>
        <select
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <label htmlFor="type">Select Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="flexibility">Flexibility</option>
        </select>
      </div>

      <div className="routine-list">
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((routine, index) => (
            <div key={index} className="routine">
              <h2>{routine.type.charAt(0).toUpperCase() + routine.type.slice(1)} Routine</h2>
              {renderExercises(routine)}
            </div>
          ))
        ) : (
          <p>No routines found for the selected level and type.</p>
        )}
      </div>
    </div>
  );
};

export default Workouts;
