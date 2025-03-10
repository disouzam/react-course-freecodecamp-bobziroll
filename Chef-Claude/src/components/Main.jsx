import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipe from "./GetRecipe";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const addNewIngredient = (formData) => {
    const ingredient = formData.get("ingredient");
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <main>
      <form action={addNewIngredient} className="add-ingredient-form">
        <input
          type="text"
          id="ingredient"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientList ingredients={ingredients} />}
      {ingredients.length > 3 && <GetRecipe ingredients={ingredients} />}
    </main>
  );
};

export default Main;
