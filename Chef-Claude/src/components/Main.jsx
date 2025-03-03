import React from "react";

const Main = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button onClick={handleClick}>Add ingredient</button>
      </form>
    </main>
  );
};

export default Main;
