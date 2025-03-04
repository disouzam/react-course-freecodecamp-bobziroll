import { useState } from "react";
import { getRecipeFromMistral } from "./../../ai";
import Recipe from "./Recipe";

const GetRecipe = (props) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeRecommendation, setRecipeRecommendation] = useState("");

  async function handleClick() {
    setRecipeRecommendation(await getRecipeFromMistral(props.ingredients));
    setShowRecipe(true);
  }

  return (
    <>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={handleClick}>Get a recipe</button>
      </div>
      {showRecipe && <Recipe recommendation={recipeRecommendation} />}
    </>
  );
};

export default GetRecipe;
