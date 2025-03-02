import React from "react";

const Header = () => {
  return (
    <header>
      <img src="src/assets/react-logo.png" width="40px" alt="React logo"></img>
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
