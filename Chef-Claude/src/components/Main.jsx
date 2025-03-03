import { useState } from "react";
import { React } from "react";
import IngredientList from "./IngredientList";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = () => {
    const ingredientInput = document.getElementById("ingredient-input").value;
    setIngredients([...ingredients, ingredientInput]);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          id="ingredient-input"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientList ingredients={ingredients} />}
    </main>
  );
};

export default Main;
