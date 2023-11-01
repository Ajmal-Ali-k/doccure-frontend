import React from "react";
import BookingSuccess from "../../components/ClientComponent/bookingcomponent/BookingSuccess";
import Layout from "../../components/layout/Layout";

function BookingSuccessPage() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100">

        <BookingSuccess />
        </section>
      </Layout>
    </>
  );
}

export default BookingSuccessPage;
