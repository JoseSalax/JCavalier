import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Cambiar de styles.css a index.css como convención moderna

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
