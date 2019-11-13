import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
        <i className="material-icons">movie_filter</i>
        Movies App
        </Link>
        {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="https://imdb.com" target="_blank" rel="noopener noreferrer">imdb</a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
