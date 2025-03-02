import React from "react";
import Header from "./Header";

const Page = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Page;
