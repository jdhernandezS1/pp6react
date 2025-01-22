import React, { useState } from "react";
import styles from "../styles/trainer/Trainer.module.css"
import { faFire, faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calculator = () => {
    const [calories, setCalories] = useState(null);
    const [bmi, setBmi] = useState(null);

    const calculateCalories = (e) => {
        e.preventDefault();
        const { age, weight, height, neck, waist, hips } = e.target.elements;
        const gender = e.target.elements.gender.value;

        const bmr =
            gender === "male"
                ? 88.36 + 13.4 * weight.value + 4.8 * height.value - 5.7 * age.value
                : 447.6 + 9.2 * weight.value + 3.1 * height.value - 4.3 * age.value;

        const calories = bmr + 10 * waist.value - 5 * hips.value + 0.1 * neck.value;
        setCalories(calories.toFixed(2));
    };

    const calculateBMI = (e) => {
        e.preventDefault();
        const { weight, height } = e.target.elements;
        const bmi = weight.value / ((height.value / 100) ** 2);
        setBmi({
            value: bmi.toFixed(2),
        });
    };

    return (
        <div className={styles["trainer-page"]}>
            <div className={styles["trainer-title"]} >
                <hr className={styles.banner} />
                <h2>Trainer Page</h2>
            </div>
            <div className={styles["trainer-calculator"]} >

                <section>
                    <h3> <FontAwesomeIcon icon={faFire} /> Calculate Daily Calories</h3>
                    <form onSubmit={calculateCalories}>
                        <input type="number" name="age" placeholder="Age (Years)" required />
                        <input type="number" name="weight" placeholder="Weight (kg)" required />
                        <input type="number" name="height" placeholder="Height(cm)" required />
                        <input type="number" name="neck" placeholder="Neck (cm)" />
                        <input type="number" name="waist" placeholder="Waist  (cm)" />
                        <input type="number" name="hips" placeholder="Hips (cm)" />
                        <select name="gender">
                            <option value="male">Man</option>
                            <option value="female">Woman</option>
                        </select>
                        <button type="submit">Calculate</button>
                    </form>
                    {calories && <p>Daily Calories: {calories} kcal</p>}
                </section>

                <section>
                    <h3><FontAwesomeIcon icon={faCalculator} /> Calculate BMI</h3>
                    <form onSubmit={calculateBMI}>
                        <input type="number" name="weight" placeholder="Weight (kg)" required />
                        <input type="number" name="height" placeholder="height (cm)" required />
                        <button type="submit">Calculate</button>
                    </form>
                    {bmi && (
                        <div>
                            <p>Your BMI es {bmi.value}</p>
                            <h3>
                                BMI Categories:
                            </h3>
                            <p>
                                Underweight: less than 18.5
                            </p>
                            <p>
                                Normal weight: 18.5 - 24.9
                            </p>
                            <p>
                                Overweight: 25 - 29.9
                            </p>
                            <p>
                                Obesity: more than 30

                            </p>




                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Calculator;
