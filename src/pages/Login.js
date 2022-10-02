import React from "react";

const Login = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto w-1/3 p-3 rounded bg-gradient-to-br from-indigo-900 to-indigo-300">
        <h1 className="text-3xl text-white p-1">Login Here</h1>
        <form onSubmit={handleForm}>
          <div className="p-1">
            <input
              className="w-full border rounded shadow p-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="p-1">
            <input
              className="w-full border rounded shadow p-2"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="p-1 float-right">
            <button
              className="rounded text-white p-2 bg-gradient-to-tr from-yellow-600 to-yellow-400"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
