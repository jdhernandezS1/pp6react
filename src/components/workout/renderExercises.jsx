import React from "react";
import styles from "../../styles/workout/workout.module.css";

const renderExercises = (routine, type) => {
    if (type === "strength" && routine.muscle_groups) {
        return Object.keys(routine.muscle_groups).map((group) => (
            <div key={group} className={styles["first-section"]}>
                <h4>{group.charAt(0).toUpperCase() + group.slice(1)}</h4>
                <div className={styles["exercises-grid"]}>
                    {routine.muscle_groups[group].map((exercise, index) => (
                        <div className={styles["exercises-card"]} key={index}>
                            <p><strong>{exercise.name}</strong>
                                {exercise.reps && ` - Reps: ${exercise.reps}`}
                                {exercise.duration && ` - Duration: ${exercise.duration}`}
                            </p>
                            <img className={styles["exercises-picture"]} src={exercise.image} alt={exercise.name}></img>
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
                        <img className={styles["exercises-picture"]} src={exercise.image} alt={exercise.name}></img>
                    </div>
                ))}
            </div>
        );
    }
};

export default renderExercises;
