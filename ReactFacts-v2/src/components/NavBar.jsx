import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img
            src="/react-logo.png"
            className="nav-logo"
            alt="React logo"
          ></img>
          <span className="nav-span">ReactFacts</span>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
