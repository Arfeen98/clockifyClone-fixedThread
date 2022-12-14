import { useSelector } from "react-redux/";
import { Navigate, useLocation } from "react-router-dom";
import { getItem } from "../Utils/localStorage";

const RequiredAuth = ({ children }) => {
  //   const { isAuth } = useSelector((state) => state.authReducer);
  const token = getItem("token");
  const location = useLocation();

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default RequiredAuth;
