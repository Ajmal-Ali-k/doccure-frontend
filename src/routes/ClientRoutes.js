import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import Signup from "../pages/client/Signup";
import Doctors from "../pages/client/Doctors";
import Department from "../pages/client/Department";
import DoctorDynamic from "../pages/client/DoctorDynamic";
import UserPrivateRoutes from "../utils/UserPrivateRoutes";
import UserProfile from "../pages/client/UserProfile";
//import UserPubicRoutes from "../utils/UserPubicRoutes";

function ClientRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<UserPrivateRoutes />}>
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/doctor_detail" element={<DoctorDynamic />} />
          <Route path="/profile" element={<UserProfile />} />

        </Route>
      </Routes>
    </div>
  );
}

export default ClientRoutes;
