import React from "react";
import { Route, Redirect } from "react-router-dom";

// Define the PublicRoute component
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...rest
}) => {
  // Render the component only if it's a public route or if the user is not authenticated, otherwise redirect to home
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
