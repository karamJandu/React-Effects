import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  // Login L
  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Wrong Credential, Try Again!");
        setIsLoading(false);
      });
  };

  const handleInput = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto w-1/3 p-3 rounded bg-gradient-to-br from-indigo-900 to-indigo-300">
        {error !== "" && <p>{error}</p>}
        <h1 className="text-3xl text-white p-1">Login Here</h1>
        <form onSubmit={handleForm}>
          <div className="p-1">
            <input
              className="w-full border rounded shadow p-2"
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleInput}
            />
          </div>
          <div className="p-1">
            <input
              className="w-full border rounded shadow p-2"
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleInput}
            />
          </div>
          <div className="p-1 float-right">
            <button
              className="rounded text-white p-2 bg-gradient-to-tr from-yellow-600 to-yellow-400"
              type="submit"
            >
              {isLoading ? (
                <i className="fas fa-circle-notch fa-spin"></i>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
