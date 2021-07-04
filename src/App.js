import React, { useContext , useEffect } from "react";
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
import PrivateRoute from "Utils/PrivateRoute";
import RoomState from "Context/Room/RoomState";
import setAuthToken from "Utils/setAuthToken";

const App = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, resetLoading } = authContext;

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if(token){
      setAuthToken(token);
      loadUser();
    }else{
      resetLoading()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AlertState>
        <RoomState >
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />

            <Route path="/user" exact>
              <PrivateRoute component={UserDashboard} />
            </Route>

            <Route path="/" component={Auth} />
            {/* add redirect for first page */}
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
        </RoomState>
      </AlertState>
    </>
  );
};

export default App;
