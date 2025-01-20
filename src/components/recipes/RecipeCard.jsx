import React from "react";
import styles from '../../styles/recipes/recipeCard.module.css'; // Import css modules stylesheet as styles


const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles["recipe-card"]}>
            <a href={recipe.sourceUrl} target="blank">
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
            <p className={styles["recipe-price"]}>Price per serving: {recipe.pricePerServing}</p> <p className={styles["recipe-minutes"]}>readyInMinutes: {recipe.readyInMinutes}</p>
            </a>
        </div>
    );
};

export default RecipeCard;
