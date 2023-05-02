import React from "react";

import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
function ProfileUpdateForm() {
  return (
    <div className="contents">
      <div className="col-md-7 col-lg-8 col-xl-8 mt-10">
        <div className="card bg-white shadow-xl rounded-lg border-0 pb-2">
          <div className="card-body">
            <form>
              <div className="row form-row space-y-4 ">
                <div className="col-12 col-md-12">
                  <div className="form-group">
                    <div className="change-avatar flex items-center">
                      <div className=" mr-4">
                        <img
                          src={img}
                          className="rounded  h-24 w-24"
                          alt="User"
                        />
                      </div>
                      <div className="">
                        <div className="change-photo-btn mb-2 w-40">
                          <span>
                            <i className="fa fa-upload" /> Upload Photo
                          </span>
                          <input type="file" className="upload" />
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
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      defaultValue="Richard"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group ">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      defaultValue="Wilson"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <div className="cal-icon">
                      <input
                        type="date"
                        className="form-control datetimepicker rounded-md border-gray-300"
                        defaultValue="24-07-1983"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Blood Group</label>
                    <select className="form-control select">
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
                      // defaultValue="richard@example.com"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      // defaultValue="+1 202-555-0125"
                      className="form-control rounded-md border-gray-300"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      // defaultValue="806 Twin Willow Lane"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      // defaultValue="Old Forge"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      // defaultValue="Newyork"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      // defaultValue={13420}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control rounded-md border-gray-300"
                      // defaultValue="United States"
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section mt-4 flex justify-end ">
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700">
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
