import React from "react";

function IngredientList(props) {
  const ingredients = props.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <div className="ingredients-list">
      <h1>Ingredients on hand:</h1>
      <ul>{ingredients}</ul>
    </div>
  );
}

export default IngredientList;
