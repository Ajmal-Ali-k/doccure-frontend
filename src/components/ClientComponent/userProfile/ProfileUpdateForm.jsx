import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { message } from "antd";
import { getUserDetails, updateProfile } from "../../../Api/services/ClientReq";
function ProfileUpdateForm() {
  const { token } = useSelector((state) => state.clientLogin);
  const [datas, setDatas] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const getuser = async () => {
    const result = await getUserDetails(token);
    if (result.data.success) {
      setDatas([result.data.user]);
   

    } else {
      message.error(result.data.message);
    }
  };
  console.log(datas)
  useEffect(() => {
    getuser();
  }, [refresh]);
  const toBase64 = (image) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    }).catch((err) => {
      console.log(err);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    data = {
      username: data.get("username"),
      lastName: data.get("lastName"),
      photo: data.get("photo"),
      number: data.get("number"),
      dateOfBirth: data.get("dateOfBirth"),
      bloodGroup: data.get("bloodGroup"),
      email: data.get("email"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      country: data.get("country"),
    };

    try {
      const image = await toBase64(data.photo);
      data.photo = image;

      const response = await updateProfile(data, token);
      if (response.data.success) {
        message.success(response.data.message);
        setRefresh((state) => !state);
      }
    } catch (error) {
      console.log(error);
      setRefresh((state) => !state);
      message.error("some thing went wrong");
    }
  };
  return (
    <div className="contents">
      <div className="col-md-7 col-lg-8 col-xl-8 mt-10">
        <div className="card bg-white shadow-xl rounded-lg border-0 pb-2">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row form-row space-y-4 ">
                {datas.map((val) => {
                  return (
                    <>
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar flex items-center">
                            <div className=" mr-4">
                              <img
                                name="image"
                                src={val.photo ? val.photo : img}
                                className="rounded  h-24 w-24"
                                alt="User"
                              />
                            </div>
                            <div className="">
                              <div className="change-photo-btn mb-2 w-40">
                                <span>
                                  <i className="fa fa-upload" /> Upload Photo
                                </span>
                                <input
                                  type="file"
                                  name="photo"
                                  className="upload"
                                />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            name="username"
                            type="text"
                            className="form-control rounded-md border-gray-300"
                            defaultValue={val.username ? val.username : ""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group ">
                          <label>Last Name</label>
                          <input
                            name="lastName"
                            type="text"
                            className="form-control rounded-md border-gray-300"
                            defaultValue={val.lastName ? val.lastName :""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <div className="cal-icon">
                            <input
                              type="date"
                              name="dateOfBirth"
                              className="form-control datetimepicker rounded-md border-gray-300"
                              defaultValue={val.dateOfBirth ? val.dateOfBirth :""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Blood Group</label>
                          <select
                            className="form-control select"
                            name="bloodGroup"
                    
                          >
                            <option value="" selected>{val.bloodGroup ?val.bloodGroup :"" }</option>
                            <option>A-</option>
                            <option>A+</option>
                            <option>B-</option>
                            <option>B+</option>
                            <option>AB-</option>
                            <option>AB+</option>
                            <option>O-</option>
                            <option>O+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Email ID</label>
                          <input
                            type="email"
                            className="form-control rounded-md border-gray-300"
                            name="email"
                            defaultValue={val.email ? val.email :""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            type="number"
                            defaultValue={val.number ? val.number :""}
                            className="form-control rounded-md border-gray-300"
                            name="number"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control rounded-md border-gray-300"
                            defaultValue={val.address ? val.address :""}
                            name="address"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control rounded-md border-gray-300"
                            name="city"
                            defaultValue={val.city ? val.city :""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control rounded-md border-gray-300"
                            name="state"
                            defaultValue={val.state ? val.state :""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Zip Code</label>
                          <input
                            type="text"
                            className="form-control rounded-md border-gray-300"
                            name="zipCode"
                            defaultValue={val.zipCode ? val.zipCode :""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            className="form-control rounded-md border-gray-300"
                            defaultValue={val.country ? val.country :""}
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="submit-section mt-4 flex justify-end ">
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
