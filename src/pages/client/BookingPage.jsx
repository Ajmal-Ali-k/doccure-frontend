import React from "react";
import Booking from "../../components/ClientComponent/bookingcomponent/Booking";
import Layout from "../../components/layout/Layout";

function BookingPage() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100  p-20">
          <Booking />
        </section>
      </Layout>
    </>
  );
}

export default BookingPage;
