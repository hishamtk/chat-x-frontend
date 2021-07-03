import React from "react";
import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
                {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/user" exact component={UserDashboard} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
          
        </Switch>
      </Router>
    </>
  );
};

export default App;
