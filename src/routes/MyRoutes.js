import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Shopping from "../components/Nadia/Shopping";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shopping/>}/>
    </Routes>
  );
}

export default MyRoutes;
