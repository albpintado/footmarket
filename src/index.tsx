import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/App/App.component";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
