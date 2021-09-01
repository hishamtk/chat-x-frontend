import Spinner from "components/Spinner/Spinner";
import AuthContext from "Context/Auth/AuthContext";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { isAuth, loading } = authContext;
  return (
    <Route
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
