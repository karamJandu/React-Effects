import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto w-1/3 p-3 rounded bg-gradient-to-br from-indigo-900 to-indigo-300">
        <h1 className="text-3xl text-white">Not Found</h1>
        <p className="m-auto">Page you are lookig is not found!</p>
        <p>
          Wanna go to{" "}
          <Link to="/" className="text-white">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
