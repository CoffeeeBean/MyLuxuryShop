import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <App />
  </Router>,
  document.getElementById("root")
);
