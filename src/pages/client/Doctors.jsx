import React from "react";

import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import DoctorCard from "../../components/doctorsListComponent/DoctorCard";

function Doctors() {
  return (
    <div>
      <NavbarComponent />
      <DoctorCard/>
    </div>
  );
}

export default Doctors;
