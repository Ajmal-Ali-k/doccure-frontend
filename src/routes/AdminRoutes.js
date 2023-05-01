import React from "react";
import { Routes, Route } from "react-router-dom";
import NewDoctors from "../pages/Admin/NewDoctors";
import AdminLogin from "../pages/Admin/AdminLogin";
import NewDocDetails from "../pages/Admin/NewDocDetails";
import Department from "../pages/Admin/Department";
import AdminPrivateRoutes from "../utils/AdminPrivateRoutes";
import AdminPublicRoutes from "../utils/AdminPublicRoutes";
import UserList from "../pages/Admin/UserList";
import DoctorsList from "../pages/Admin/DoctorsList";

function AdminRoutes() {
  return (
    <div>
      <Routes>
      <Route element={<AdminPublicRoutes/>}>
      <Route path="/" element={<AdminLogin />} />

      </Route>
   
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/new_doctors" element={<NewDoctors />}></Route>
          <Route path="/new_doctor_details/:id" element={<NewDocDetails />} />
          <Route path="/department" element={<Department />} />
          <Route path="/userlist" element={<UserList/>}/>
          <Route path="/doctorslist" element={<DoctorsList/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default AdminRoutes;
