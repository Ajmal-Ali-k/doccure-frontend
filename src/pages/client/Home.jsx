import React from "react";

import BannerFirst from "../../components/HomeComponents/BannerFirst";
import BannerSecond from "../../components/HomeComponents/BannerSecond";
import Layout from "../../components/layout/Layout";
import SpecialityComponent from "../../components/HomeComponents/SpecialityComponent";

function Home() {
  return (
    <main>
      <Layout>
        <section className="bg-banner bg-slate-50">
          <BannerFirst />
        </section>
        <section className="bg-banner bg-gray-100">
          <BannerSecond />
        </section>
        {/* <section className="bg-banner2 bg-slate-50">
          <SpecialityComponent/>
        </section> */}
      </Layout>
    </main>
  );
}

export default Home;
