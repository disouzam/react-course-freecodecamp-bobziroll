import React from "react";

const Main = () => {
  return (
    <main>
      <h1>Fun facts about React!</h1>
      <ul className="unordered-list">
        <li className="unordered-list-item">Was first released in 2013</li>
        <li className="unordered-list-item">
          Was originally created by Jodan Walke
        </li>
        <li className="unordered-list-item">
          Has well over 100K stars on GitHub
        </li>
        <li className="unordered-list-item">Is maintained by Meta</li>
        <li className="unordered-list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      {/* <img
        src="/react-logo.png"
        className="main-background-logo"
        alt="React logo"
      ></img> */}
    </main>
  );
};

export default Main;
