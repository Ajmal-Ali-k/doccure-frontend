import React from "react";
import DoctorProfileSidebar from "./DoctorProfileSidebar";
import { useSelector } from "react-redux";
import { message } from "antd";
import { change_doc_pwd } from "../../../Api/services/DoctorReq";
function DrcahngePassword() {
  const {token}= useSelector((state)=>state.doctorLogin)
  const handleSubmit =async (e)=>{
    e.preventDefault();
    let data = new FormData(e.currentTarget);

    data = {
      oldPassword: data.get("oldPassword"),
      newPassword: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    };
    console.log(data ,"this si  data")
    try {
      const response = await change_doc_pwd(data,token);
      console.log(response)
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error);
      message.error("something went wrong")
      
    }
  }

  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorProfileSidebar/>
              {/* /Profile Sidebar */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      {/* Change Password Form */}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Old Password</label>
                          <input type="password"  name="oldPassword" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>New Password</label>
                          <input type="password"  name="newPassword" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input type="password"   name="confirmPassword" className="form-control" />
                        </div>
                        <div className="submit-section">
                          <button
                            type="submit"
                            className="px-2 py-2 bg-blue-500 text-white rounded-lg "
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* /Change Password Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrcahngePassword;
