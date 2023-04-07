import React from "react";

import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import LandingPageFirst from "../../components/HomeComponents/LandingPageFirst";
import LandingSecond from "../../components/HomeComponents/LandingSecond";
import Footer from "../../components/HomeComponents/FooterComponent";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <LandingPageFirst/>
      <LandingSecond/>
      <Footer />
    </div>
  );
}

export default Home;
