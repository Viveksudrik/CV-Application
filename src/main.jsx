import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Renamed import from CVApp to App
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Now correctly renders the imported App */}
  </React.StrictMode>,
);