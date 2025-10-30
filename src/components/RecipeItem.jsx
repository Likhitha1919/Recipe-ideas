import React from "react";

const RecipeItem = ({ recipe, onSelect }) => {
  return (
    <div className="recipe-item" onClick={() => onSelect(recipe)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
    </div>
  );
};

export default RecipeItem;
