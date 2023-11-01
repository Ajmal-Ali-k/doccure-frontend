import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { getUserDetails } from "../../../Api/services/ClientReq";
import { useSelector } from "react-redux";
function WalletComponent() {
  const [balance, setBalance] = useState("");
  const { token } = useSelector((state) => state.clientLogin);
  const getbalence = async () => {
    const response = await getUserDetails(token);
    if (response.data.success) {
      setBalance(response.data.balence);
    } else {
      console.log("something went wrong");
    }
  };
  useEffect(() => {
    getbalence();
  }, []);

  return (
    <div className="content">
      <div className="container-fluid max-container h-screen">
        <div className="flex row">
          {/* Profile Sidebar */}
          <ProfileCard />
          {/* /Profile Sidebar */}
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-body">
                {/* Profile Settings Form */}
                <div className="col-md-12 col-lg-12 h-28 border rounded-md bg-lime-300 flex flex-col items-center justify-center">
                  <p className="text-2xl text-green-700  font-semibold p-5 ">
                   Balance  - <span> ${balance}</span> 
                  </p>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletComponent;
