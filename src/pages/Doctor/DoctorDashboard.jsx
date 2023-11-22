import React from "react";
import DashboardComponents from "../../components/DoctorComponents/DoctorDashBoard/DashboardComponents";
import DocDashLayout from "../../components/DoctorComponents/DoctorDashBoard/DocDashLayout";

function DoctorDashboard() {
  return (
    <div>
      <DocDashLayout>
        <DashboardComponents />
      </DocDashLayout>
    </div>
  );
}

export default DoctorDashboard;
