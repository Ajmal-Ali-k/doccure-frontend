import React from "react";
import ChangePasswordComponent from "../../components/ClientComponent/ChangePassword/ChangePasswordComponent";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import ProfileCard from "../../components/ClientComponent/userProfile/ProfileCard";

function ChangePassword() {
  return (
    <div>
      <NavbarComponent />
      <div className="w-full flex h-screen">
        <ProfileCard />
        <ChangePasswordComponent />
      </div>
    </div>
  );
}

export default ChangePassword;
