import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import Signup from "../pages/client/Signup";
import Doctors from "../pages/client/Doctors";
import DoctorDynamic from "../pages/client/DoctorDynamic";
import UserPrivateRoutes from "../utils/UserPrivateRoutes";
// import Dashbaord from "../pages/client/Dashboard";
import ProfileSetting from "../pages/client/ProfileSetting";
import ChangePassword from "../pages/client/ChangePassword";
import BookingPage from "../pages/client/BookingPage";
import Messenger from "../pages/client/Messenger";
import BookingSuccessPage from "../pages/client/BookingSuccessPage";
import Wallet from "../pages/client/Wallet";
import NotFound from "../pages/NotFound";

//import UserPubicRoutes from "../utils/UserPubicRoutes";
const LazyDepartment = React.lazy(() => import("../pages/client/Department"));
const Dashbaord = React.lazy(() => import("../pages/client/Dashboard"));

function ClientRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chating" element={<Messenger />} />

        <Route element={<UserPrivateRoutes />}>
          <Route path="/doctors" element={<Doctors />} />
          <Route
            path="/departments"
            element={
              <Suspense fallback={<p>Loading.....</p>}>
                <LazyDepartment />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<p>Loading</p>}>
                <Dashbaord />
              </Suspense>
            }
          />
          <Route path="/doctor_detail/:id" element={<DoctorDynamic />} />
          <Route path="/update_profile" element={<ProfileSetting />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/booking/:id" element={<BookingPage />} />

          <Route path="/booking_success/:id" element={<BookingSuccessPage />} />

          <Route path="/wallet" element={<Wallet />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default ClientRoutes;
