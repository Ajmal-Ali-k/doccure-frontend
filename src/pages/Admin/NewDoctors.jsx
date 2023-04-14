import React from "react";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import NewDoctorsComponent from "../../components/AdminComponent/NewDoctorsComponent";

function NewDoctors() {
  return (
    <div className="w-full flex">
      <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        <AdminSidebar />
      </div>
      <div className="w-full ">
        <NewDoctorsComponent />
      </div>
    </div>
  );
}

export default NewDoctors;
