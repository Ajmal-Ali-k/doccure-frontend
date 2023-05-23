import React from "react";
import BookingSuccess from "../../components/ClientComponent/bookingcomponent/BookingSuccess";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

function BookingSuccessPage() {
  return (
    <div>
      <NavbarComponent />

      <BookingSuccess />

      <FooterComponent />
    </div>
  );
}

export default BookingSuccessPage;
