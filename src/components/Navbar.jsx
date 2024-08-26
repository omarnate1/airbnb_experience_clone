import React from "react";
import logo from "../assets/airbnb 1.svg";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo-icon" className="logo" />
      </nav>
    </header>
  );
};

export default Navbar;
