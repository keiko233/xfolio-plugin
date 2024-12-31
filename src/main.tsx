import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./provider";

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div");
    document.body.append(app);
    return app;
  })(),
).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);
