import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import KlCard from "../components/Almaz/KlCard";


function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<KlCard />} />
    </Routes>
  );
}

export default MyRoutes;
