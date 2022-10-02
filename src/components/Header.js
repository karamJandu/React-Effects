import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-5 bg-gray-900 text-white">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </span>
        <span>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Header;
