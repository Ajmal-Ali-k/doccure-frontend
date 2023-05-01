import React from "react";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import DoctorsListComponent from "../../components/AdminComponent/DoctorsList/DoctorsListComponent";

function DoctorsList() {
  return (
    <div className="w-full flex">
      <div className="w-1/5 fixed h-max  inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        <AdminSidebar />
        <div />
      
      </div>
      <div className="w-full">
          <DoctorsListComponent/>
        </div>
    </div>
  );
}

export default DoctorsList;
