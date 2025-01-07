import React from "react";
import styles from '../styles/recipes/recipeCard.module.css'; // Import css modules stylesheet as styles


const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles["recipe-card"]}>
            <a href={recipe.sourceUrl} target="blank">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            </a>
        </div>
    );
};

export default RecipeCard;
