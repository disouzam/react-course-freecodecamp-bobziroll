import React from "react";
import ReactMarkdown from "react-markdown";

const Recipe = (props) => {
  console.log(`Recipe component: ${props.recommendation}`);

  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{props.recommendation}</ReactMarkdown>
      </article>
    </section>
  );
};

export default Recipe;
