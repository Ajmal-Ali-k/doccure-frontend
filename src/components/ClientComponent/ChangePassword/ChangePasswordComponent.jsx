import React from "react";
import { message } from "antd";
import { changePwd } from "../../../Api/services/ClientReq";
import { useSelector } from "react-redux";
import ProfileCard from "../userProfile/ProfileCard";

function ChangePasswordComponent() {
  const { token } = useSelector((state) => state.clientLogin);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    data = {
      oldPassword: data.get("oldPassword"),
      newPassword: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    };

    console.log(data, "this is submit data");
    try {
      const response = await changePwd(data, token);
      console.log(response)
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      {/* <div className="w-2/6 flex flex-col mt-10 ">
        <div className="rounded-lg bg-white shadow-xl border-0">
          <div className="mx-6 my-3 ">
            <form onSubmit={handleSubmit}>
              <div className="col-12 col-md-12 mb-2">
                <div className="form-group">
                  <label>Old Password</label>
                  <input
                    type="password"
                    className="form-control rounded-md border-gray-300"
                    placeholder="Enter your old password"
                    name="oldPassword"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12 mb-2">
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="text"
                    className="form-control rounded-md border-gray-300"
                    placeholder="Enter your New password"
                    name="newPassword"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    type="text"
                    className="form-control rounded-md border-gray-300"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                  />
                </div>
              </div>
              <div className="flex mt-3 justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 py-1 px-2 text-white rounded-lg hover:bg-blue-800"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
     
              {/* Profile Sidebar */}
              <ProfileCard/>
              {/* /Profile Sidebar */}
         
            <div className="col-md-7 col-lg-5 col-xl-5">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-12">
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
                            className="px-2 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-800"
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

export default ChangePasswordComponent;
