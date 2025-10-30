import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-modal" onClick={onClose}>
      <div className="recipe-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p><strong>Category:</strong> {recipe.strCategory}</p>
        <p><strong>Area:</strong> {recipe.strArea}</p>
        <p><strong>Instructions:</strong></p>
        <p>{recipe.strInstructions}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;
