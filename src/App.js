import React from "react";
import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";

import UserDashboard from "views/UserDashboard"
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" exact component={Landing} />
      <Route path="/" component={Auth} />
      <Route path="/user" exact component={UserDashboard} />

 
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
          
        </Switch>
      </Router>
    </>
  );
};

export default App;
