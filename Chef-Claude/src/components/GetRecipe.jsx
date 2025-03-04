import { useState } from "react";
import { getRecipeFromMistral } from "./../../ai";
import Recipe from "./Recipe";

const GetRecipe = (props) => {
  const [showRecipe, setShowRecipe] = useState(false);

  console.log(
    `Ingredients at GetRecipe component: ${JSON.stringify(props.ingredients)}`
  );

  async function handleClick() {
    console.log("Get recipe button clicked");
    const recipeRecommendation = await getRecipeFromMistral(props.ingredients);
    console.log(`Recipe recommendation: ${recipeRecommendation}`);
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
      {showRecipe && <Recipe />}
    </>
  );
};

export default GetRecipe;
