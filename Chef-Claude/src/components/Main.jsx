import React from "react";

const Main = () => {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button onClick={() => console.log("Clicked!")}>Add ingredient</button>
      </form>
    </main>
  );
};

export default Main;
