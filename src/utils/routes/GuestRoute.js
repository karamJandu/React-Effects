import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";
import AppContext from "../../store/AppContext";

const GuestRoute = ({ children }) => {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn === null) return <Loading />;

  if (isLoggedIn === false) return children;

  return <Navigate to="/login" />;
};

export default GuestRoute;
