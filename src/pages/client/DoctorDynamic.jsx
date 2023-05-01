import React from "react";
import DoctorDetailComponent from "../../components/ClientComponent/DoctorDynamic/DoctorDetailComponent";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";

function DoctorDynamic() {
  return (
    <div>
      <NavbarComponent />


        <div className="w-full flex justify-center items-center">
          <DoctorDetailComponent />
        </div>
   
    </div>
  );
}

export default DoctorDynamic;
