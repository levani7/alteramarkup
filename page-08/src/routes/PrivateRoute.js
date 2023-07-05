import React from "react";
import { Route, Redirect } from "react-router-dom";

// Define the PrivateRoute component
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  // Render the component only if the user is authenticated, otherwise redirect to login
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
