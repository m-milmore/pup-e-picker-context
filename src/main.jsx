import React from "react";
import ReactDOM from "react-dom/client";
import { DogsProvider } from "./providers/dog-provider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DogsProvider>
      <App />
    </DogsProvider>
  </React.StrictMode>
);
