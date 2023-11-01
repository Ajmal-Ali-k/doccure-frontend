import React from "react";
import DashBoardComponent from "../../components/AdminComponent/AdminDashboard/DashBoardComponent";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";

function DashBoard() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/5 fixed h-max  inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
          <AdminSidebar />
          <div />
        </div>
        <div className="w-full">
          <DashBoardComponent />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
