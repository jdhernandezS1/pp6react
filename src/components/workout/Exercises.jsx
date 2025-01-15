import React, { useState } from "react";
import workoutsData from "../../data/workout.json";
import styles from "../../styles/workout/workout.module.css";
import renderExercises from "./renderExercises";

const Exercises = () => {

    const [level, setLevel] = useState("beginner");
    const [type, setType] = useState("cardio");
    const filteredWorkouts = workoutsData.routines.filter(
        (routine) => routine.level === level && routine.type === type
    );

    return (
        <>

            <div className={styles["controls"]}>
                <div>

                    <label htmlFor="level" className={styles["level"]}>Select Level:</label>
                    <select
                        className={styles["options"]}
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    >
                        <option className={styles["choises"]} value="beginner">Beginner</option>
                        <option className={styles["choises"]} value="intermediate">Intermediate</option>
                        <option className={styles["choises"]} value="advanced">Advanced</option>
                    </select>
                </div>
                <div>

                    <label htmlFor="type" className={styles["level"]}>Select Type:</label>
                    <select
                        className={styles["options"]}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option className={styles["choises"]} value="cardio">Cardio</option>
                        <option className={styles["choises"]} value="strength">Strength</option>
                        <option className={styles["choises"]} value="flexibility">Flexibility</option>
                    </select>
                </div>
            </div>

            <div className="routine-list">
                {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((routine, index) => (
                        <div key={index} className="routine">
                            <h2>{routine.type.charAt(0).toUpperCase() + routine.type.slice(1)} Routine</h2>
                            {renderExercises(routine, type)}
                        </div>
                    ))
                ) : (
                    <p>No routines found for the selected level and type.</p>
                )}
            </div>
        </>
    );
};
export default Exercises;
