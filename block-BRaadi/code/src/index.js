import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
import EmptyDataError from "./components/EmptyDataError";

ReactDOM.render(
  <React.StrictMode>
    <EmptyDataError>
      <App />
    </EmptyDataError>
  </React.StrictMode>,
  document.getElementById("root")
);
