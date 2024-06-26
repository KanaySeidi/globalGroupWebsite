import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <MyRoutes />
  </BrowserRouter>
);
