import React from "react";

const App = () => {
  return temporaryName();
};

function temporaryName() {
  return (
    <div>
      <img src="src/assets/react-logo.png" width="40px" alt="React logo"></img>
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jodan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
