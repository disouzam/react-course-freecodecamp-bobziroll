import React from "react";

const GetRecipe = (props) => {
  console.log(`props received at GetRecipe component ${JSON.stringify(props)}`);

  return (
    <div className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button>Get a recipe</button>
    </div>
  );
};

export default GetRecipe;
