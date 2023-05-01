import React from "react";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import UserListComponent from "../../components/AdminComponent/UserList/UserListComponent";

function UserList() {
  return (
    <div className="w-full flex">
      <div className="w-1/5 fixed h-max  inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        <AdminSidebar />
        <div />
      </div>
      <div className="w-full">
        <UserListComponent />
      </div>
    </div>
  );
}

export default UserList;
