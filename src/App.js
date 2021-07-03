import React from "react";
import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";

import UserDashboard from "views/UserDashboard"
import Auth from "layouts/Auth.js";

// views without layouts

import Index from "views/Index.js";


const App = () => {
  return (
    <>
      <Router>
        <Switch>

      <Route path="/" component={Auth} />
      <Route path="/user" exact component={UserDashboard} />

      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
          
        </Switch>
      </Router>
    </>
  );
};

export default App;
