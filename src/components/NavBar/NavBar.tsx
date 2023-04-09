import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <a className="a-button how-work" href="#">
        How does this work?
      </a>
      <a className="a-button" href="#">
        Contact Us
      </a>
      <a className="a-button" href="#">
        About
      </a>
      <a className="a-button" href="#">
        A Magic Button
      </a>
    </div>
  );
};

export default NavBar;
