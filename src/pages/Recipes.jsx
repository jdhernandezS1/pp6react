import React, { useState, useEffect } from "react";
import RecipeList from "../components/recipes/RecipeList";
import API_CONFIG from "../utils/config";
import styles from "../styles/recipes/recipes.module.css"
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    const API_URL = `${API_CONFIG.BASE_URL}/recipes/random?apiKey=${API_CONFIG.API_KEY}&tags=vegan%vegetarian&number=9`;
    
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setRecipes(data["recipes"]);
      console.log(data["recipes"]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className={styles["recipes-page"]}>
      <hr className={styles.banner}/>
      <h1>Vegetarian Recipes</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <RecipeList recipes={recipes}/>}
      
    </div>
  );
};

export default Recipes;
