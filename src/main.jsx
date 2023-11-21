import ReactDom from "react-dom/client";
import { restaurants } from "./const/mock.js";
import { App } from "./App.jsx";

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <App restaurants={restaurants} />
);