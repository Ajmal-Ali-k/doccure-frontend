import React from "react";

import BannerFirst from "../../components/HomeComponents/BannerFirst";
import BannerSecond from "../../components/HomeComponents/BannerSecond";
import Layout from "../../components/layout/Layout";
import Service from "../../components/HomeComponents/Service";
import Feature from "../../components/HomeComponents/Feature";
import Faq from "../../components/HomeComponents/Faq";
import Testimonial from "../../components/HomeComponents/Testimonial";

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
        <Service />
        <Feature />
        <Faq />
        <Testimonial />
      </Layout>
    </main>
  );
}

export default Home;
