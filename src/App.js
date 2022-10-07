import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./store/AppContext";
import AnimatedRoute from "./utils/routes/AnimatedRoute";

import "./assets/css/style.css";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import initFirebase from "./config/initFirebase";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

const App = () => {
  initFirebase();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  // user logged in
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setIsLoggedIn(true);
        setUser(_user);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedRoute>
                <Home />
              </AnimatedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <AnimatedRoute>
                <Gallery />
              </AnimatedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AnimatedRoute>
                <Login />
              </AnimatedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AnimatedRoute>
                <SignUp />
              </AnimatedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
