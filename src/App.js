import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import UserDashboard from "views/UserDashboard";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import AuthContext from "Context/Auth/AuthContext";
import AlertState from "Context/Alert/AlertState";

const App = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, resetLoading } = authContext;

  return (
    <>
      <AlertState>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />

            <Route path="/user" exact component={UserDashboard} />

            <Route path="/" component={Auth} />
            {/* add redirect for first page */}
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </AlertState>
    </>
  );
};

export default App;
