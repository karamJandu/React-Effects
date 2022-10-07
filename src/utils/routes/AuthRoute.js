import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";
import AppContext from "../../store/AppContext";

export default function AuthRoute({ children }) {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn === null) return <Loading />;

  if (isLoggedIn) return children;

  return <Navigate to="/" />;
}
