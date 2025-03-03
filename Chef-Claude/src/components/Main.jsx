import { useState } from "react";
import IngredientList from "./IngredientList";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient");
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
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
    </main>
  );
};

export default Main;
