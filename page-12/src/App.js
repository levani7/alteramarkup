import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import store from "./store/store";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";



const App = () => {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <Suspense
    // fallback={<Loader />} // there should be loader
    >
      <Provider store={store}>
        <Router>
          <Switch>
            {/* Public routes */}
              <PublicRoute
                  restricted={true}
                  isAuthenticated={isAuthenticated}
                  component={Dashboard}  // Login
                  path="/login"
              />
              {/* Private routes */}
              <PrivateRoute
                  isAuthenticated={false}
                  component={Dashboard}
                  path="/"
              />
            {/* Add more routes here */}
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  );
};

export default App;
