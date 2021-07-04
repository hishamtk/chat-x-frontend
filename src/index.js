import React from "react";
import ReactDOM from "react-dom";
import "assets/styles/tailwind.css";
import "index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "App";
import AuthState from "Context/Auth/AuthState";

ReactDOM.render(
  <AuthState>
    <App />
  </AuthState>,
  document.getElementById("root")
);
