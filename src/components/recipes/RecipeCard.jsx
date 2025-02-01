import React from "react";
import styles from '../../styles/recipes/recipeCard.module.css'; // Import css modules stylesheet as styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles["recipe-card"]}>

            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
            <p className={styles["recipe-price"]}>Price per serving: {recipe.pricePerServing}$</p>
            <p className={styles["recipe-minutes"]}>readyInMinutes: {recipe.readyInMinutes}</p>
            <a href={recipe.sourceUrl} target="blank">
                <FontAwesomeIcon icon={faCircleInfo} /> More Information
            </a>
        </div>
    );
};

export default RecipeCard;
