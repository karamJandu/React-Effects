import React, { useContext } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import AppContext from "../store/AppContext";

const Header = () => {
  const [isLoggedIn] = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const activeLink = (_path) => {
    return location.pathname === _path ? "text-indigo-400" : "text-white";
  };

  return (
    <nav className="py-5 bg-gray-900 text-white">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <NavLink to="/" className={() => activeLink("/")}>
              Home
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/gallery" className={() => activeLink("/gallery")}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tensorflow"
              className={() => activeLink("/tensorflow")}
            >
              TensorFlow
            </NavLink>
          </li>
        </span>
        <span className="flex">
          <li>
            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <NavLink
                to="/login"
                className={() => activeLink("/login") + " mr-4"}
              >
                Login
              </NavLink>
            )}
          </li>
          <li>
            {!isLoggedIn && (
              <NavLink to="/signup" className={() => activeLink("/signup")}>
                Sign Up
              </NavLink>
            )}
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Header;
