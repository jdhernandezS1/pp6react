import React, { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import API_CONFIG from "../config";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    const API_URL = `${API_CONFIG.BASE_URL}/recipes/random?apiKey=${API_CONFIG.API_KEY}&number=10`;
    
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();

      // Verificamos que searchResults exista y tenga resultados válidos
      const products = data.searchResults?.find(
        (result) => result.name === "Products"
      );
      setRecipes(products?.results || []);
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
    <div>
      <h1>Recipes</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Recipes;
