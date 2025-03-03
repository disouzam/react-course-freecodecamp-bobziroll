import React from "react";

const Main = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  const handleMouseEnter = () => {
    console.log(`Mouse entered at ${new Date()}`);
  };

  const handleMouseLeave = () => {
    console.log(`Mouse left at ${new Date()}`);
  };

  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Add ingredient
        </button>
      </form>
    </main>
  );
};

export default Main;
