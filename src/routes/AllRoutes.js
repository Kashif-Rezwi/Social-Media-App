import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      ;
      <Route path="/register" element={<Register />} />;
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>404 Page Not Found!</div>} />
    </Routes>
  );
}

export default AllRoutes;
