import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  // const { getLocalIsAuthenticated } = useUserContext();
  // const { myUser } = useUserContext();

  // const isAuthenticated = getLocalIsAuthenticated();
  if (user) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};
export default PrivateRoute;
