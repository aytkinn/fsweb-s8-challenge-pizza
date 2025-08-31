import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
);
