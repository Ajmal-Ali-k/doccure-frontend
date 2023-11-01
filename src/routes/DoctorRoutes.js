import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DoctorSignup from "../pages/Doctor/DoctorSignup";
import DoctorVerification from "../pages/Doctor/DoctorVerification";
import DoctorLogin from "../pages/Doctor/DoctorLogin";
// import DoctorDashboard from "../pages/Doctor/DoctorDashboard";
import DoctorTimeSchedule from "../pages/Doctor/DoctorTimeSchedule";
import DRChangePassword from "../pages/Doctor/DRChangePassword";
import DoctorProflesetting from "../pages/Doctor/DoctorProflesetting";
import VideoCallPage from "../pages/videoCall/VideoCallPage";
import LobbyPage from "../pages/videoCall/LobbyPage";
import Room from "../pages/videoCall/Room";
import NotFound from "../pages/NotFound";
import PastAppoiment from "../pages/Doctor/PastAppoiment";

const DoctorDashboard = React.lazy(() =>
  import("../pages/Doctor/DoctorDashboard")
);

function DoctorRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/doctor_login" element={<DoctorLogin />} />
        <Route path="/doctor_signup" element={<DoctorSignup />} />
        <Route path="/doctor_verification" element={<DoctorVerification />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <DoctorDashboard />
            </Suspense>
          }
        />
        <Route path="/schedule_timing" element={<DoctorTimeSchedule />} />
        <Route path="/change_password" element={<DRChangePassword />} />
        <Route path="/profile_setting" element={<DoctorProflesetting />} />
        <Route path="/videoCall" element={<VideoCallPage />} />
        <Route path="/Lobby" element={<LobbyPage />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/appoinments" element={<PastAppoiment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default DoctorRoutes;
