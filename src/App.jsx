import React, { useState } from "react";
import "./styles/index.css";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";
import { fetchRecipes } from "./api/mealsAPI";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (ingredient) => {
    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const data = await fetchRecipes(ingredient);
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setError("No recipes found. Try a different ingredient.");
      }
    } catch {
      setError("Failed to fetch recipes. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setRecipes([]);
    setError("");
  };

  return (
    <div className="app">
      <h1>🍳 Recipe Ideas</h1>
      <p>Search recipes using ingredients you have</p>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default App;
