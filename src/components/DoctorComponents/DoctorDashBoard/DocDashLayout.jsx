import React from "react";
import NavbarComponent from "../../HomeComponents/NavbarComponent";
import FooterComponent from "../../HomeComponents/FooterComponent";
import DoctorProfileSidebar from "./DoctorProfileSidebar";

const DocDashLayout = ({ children }) => {
  return (
    <div className="relative bg-white">
      <NavbarComponent />
      <main className="h-screen bg-slate-100">
        <div className="content ">
          <div className="container-fluid max-container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <DoctorProfileSidebar />

                {/* /Profile Sidebar */}
              </div>
              {children}
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default DocDashLayout;
