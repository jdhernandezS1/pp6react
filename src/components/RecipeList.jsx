import React from "react";
import RecipeCard from "./RecipeCard";
import style  from "../styles/recipes/recipeGrid.module.css"

const RecipeList = ({ recipes }) => {
  return (
    <div className={style["recipes-grid"]}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
