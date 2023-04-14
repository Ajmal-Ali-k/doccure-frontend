import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import Signup from "../pages/client/Signup";
import Doctors from "../pages/client/Doctors";

function ClientRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route  path="/doctors" element={<Doctors/>}/>
      </Routes>
    </div>
  );
}

export default ClientRoutes;
