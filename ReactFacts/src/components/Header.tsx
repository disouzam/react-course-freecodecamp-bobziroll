import React from "react";

const Header = () => {
  return (
    <header>
      <img src="src/assets/react-logo.png" width="40px" alt="React logo"></img>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
