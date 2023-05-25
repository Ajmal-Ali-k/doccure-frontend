import React from "react";
import ChangePasswordComponent from "../../components/ClientComponent/ChangePassword/ChangePasswordComponent";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import ProfileCard from "../../components/ClientComponent/userProfile/ProfileCard";

function ChangePassword() {
  return (
    <div className="main-wrapper">
      <NavbarComponent />


        <ChangePasswordComponent />
      </div>

  );
}

export default ChangePassword;
