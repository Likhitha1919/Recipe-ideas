import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default RecipeList;
