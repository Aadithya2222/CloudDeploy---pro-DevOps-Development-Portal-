import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./services/awsConfig"; // Import the authService to initialize it

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);