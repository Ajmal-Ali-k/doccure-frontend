import React from "react";
import NavbarComponent from "../HomeComponents/NavbarComponent";
import FooterComponent from "../HomeComponents/FooterComponent";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-white">
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
