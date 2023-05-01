import React from "react";

import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import Footer from "../../components/HomeComponents/FooterComponent";
import BannerFirst from "../../components/HomeComponents/BannerFirst";
import BannerSecond from "../../components/HomeComponents/BannerSecond";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <BannerFirst/>
     <BannerSecond/>
      <Footer />
    </div>
  );
}

export default Home;
