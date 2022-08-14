import React from "react";
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="blogTopbar">
          <a href="#">
            <div id="logo">EDYODA</div>
            <p id="logoStories">Stories</p>
          </a>
        </div>
        <nav>
          <p id="dropDown">Explore Categories</p>
          <p>
            {" "}
            <i className="arrow down"></i>
          </p>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
