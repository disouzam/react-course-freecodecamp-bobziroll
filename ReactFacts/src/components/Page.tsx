import React from "react";

const Page = () => {
  return (
    <div>
      <header>
        <img
          src="src/assets/react-logo.png"
          width="40px"
          alt="React logo"
        ></img>
      </header>
      <main>
        <h1>Fun facts about React!</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jodan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <footer>
        <small>
          &copy; 2024 Dickson Souza development. All rights reserved
        </small>
      </footer>
    </div>
  );
};

export default Page;
