import React, { useState } from "react";
import { message } from "antd";
import { useSelector } from "react-redux";
import DoctorProfileSidebar from "./DoctorProfileSidebar";
import "react-datepicker/dist/react-datepicker.css";
import { createSlot } from "../../../Api/services/DoctorReq";
import Loader from "../../HomeComponents/Loader";
import { RxCross2 } from "react-icons/rx";
import SlotModal from "./SlotModal";

function ScheduleTIming() {
  const initialState = {
    date: new Date(),
    endTime: "",
    startTime: "",
  };
  const Today = new Date();
  console.log(Today, "this today date");

  const { token } = useSelector((state) => state.doctorLogin);
  console.log(token, "this is the doctor token");
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [submit,setSubmit]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setFormErrors(validate(formValues));
    if (validate(formValues)) {
      try {
        const result = await createSlot(formValues, token);
        console.log(result);
        if (result.data.success) {
          setLoader(false);
          setSubmit(true)
          message.success("Slot Created Successfully");
        } else {
          setLoader(false);
          message.error("Oops  Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoader(false);
    }
  };

  const validate = (values) => {
    console.log(formErrors);
    const errors = {};
    let currentDate = new Date();
    console.log(new Date(values.date), 2222);

    console.log(currentDate);

    if (!values.date) {
      errors.date = "date is required";
      message.error("date is required");
    }
    if (!values.endTime) {
      errors.endTime = "End Time is required";
      message.error("End Time is required");
      // } else if (regex.test(values.email)) {
      //   errors.email = "This is not a valid email format";
    }
    if (!values.startTime) {
      errors.startTime = "Start Time is required";
      message.error("Start Time is required");
    }
    if (values.startTime > values.endTime) {
      errors.properTime = "Choose a proper time";
      message.error("Choose a proper time");
    }
    if (currentDate > new Date(values.date)) {
      errors.properDate = "Choose a proper date";
      message.error("Choose a proper date");
    }

    // return errors;
    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorProfileSidebar />
              {/* /Profile Sidebar */}
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Schedule Timings</h4>
                      <div className="profile-box">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              {/* <label>Select a day</label> */}
                              {/* <select className="select form-control">
                                <option>-</option>
                                {daysofweek && daysofweek.map((val)=>{
                                  return  <option value={val}>{val}</option>
                                })}
                                 
                                 
                              </select> */}
                              {/* <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="border-gray-300 rounded-md"
                              /> */}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="card schedule-widget mb-0">
                              {/* Schedule Header */}
                              <div className="schedule-header">
                                {/* Schedule Nav */}
                                <div className="schedule-nav">
                                  <ul className="nav nav-tabs nav-justified">
                                    {/* { daysofweek && daysofweek.map((val)=>{
                                    return (
                                      <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#slot_sunday"
                                      >
                                       {val}
                                      </a>
                                    </li>
                                    )
                                  })} */}

                                    <form onSubmit={handleSubmit}>
                                      <div className="mb-5 pt-3">
                                        <div className="w-full px-3 ">
                                          <div className="mb-5">
                                            <label
                                              for="date"
                                              className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                              Date
                                            </label>
                                            <input
                                              min={disablePastDate()}
                                              type="date"
                                              name="date"
                                              id="date"
                                              onChange={handleChange}
                                              value={formValues.date}
                                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                          </div>
                                        </div>
                                        {/* <label className="mb-2 mt-2 block text-base  text-[#07074D] sm:text-md">
                                          Select a Time
                                        </label> */}
                                        <div className="-mx-2 flex flex-wrap">
                                          <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                              <label
                                                for="time"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                              >
                                                Start Time
                                              </label>
                                              <input
                                                type="time"
                                                name="startTime"
                                                id="time"
                                                step="3600"
                                                onChange={handleChange}
                                                value={formValues.startTime}
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] appearance-none outline-none focus:border-[#6A64F1] focus:shadow-md"
                                              />
                                            </div>
                                          </div>
                                          {loader && <Loader />}

                                          <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                              <label
                                                for="time"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                              >
                                                End Time
                                              </label>
                                              <input
                                                type="time"
                                                name="endTime"
                                                id="time"
                                                step="3600"
                                                onChange={handleChange}
                                                value={formValues.endTime}
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] appearance-none outline-none focus:border-[#6A64F1] focus:shadow-md"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <button
                                            type="submit"
                                            className="px-2 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg ml-4"
                                          >
                                            submit
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </ul>
                                </div>

                                {/* /Schedule Nav */}
                              </div>
                              {/* /Schedule Header */}
                              {/* Schedule Content */}
                              <div className="tab-content schedule-cont">
                                {/* Sunday Slot */}
                                <div id="slot_sunday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Time Slots</span>
                                    <a
                                      className="edit-link"
                                      data-toggle="modal"
                                      href="#add_time_slot"
                                    >
                                      <i className="fa fa-plus-circle" /> Add
                                      Slot
                                    </a>
                                  </h4>
                                  <p className="text-muted mb-0">
                                    Not Available
                                  </p>
                                </div>
                                {/* /Sunday Slot */}
                                {/* Monday Slot */}
                                <div
                                  id="slot_monday"
                                  className="tab-pane fade show active"
                                >
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Time Slots</span>
                               
                                  </h4>
                            {/* time slots */}
                                  {/* <div className="doc-times">
                                    <div className="doc-slot-list">
                                      8:00 pm - 11:30 pm
                                      <a
                                        href="javascript:void(0)"
                                        className="delete_schedule"
                                      >
                                    <RxCross2/>
                                  
                                      </a>
                                    </div>
                                  </div> */}
                                  <SlotModal values={submit}/>



{/* timeslots */}
                               
                                </div>
                                {/* /Monday Slot */}
                              </div>
                              {/* /Schedule Content */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ScheduleTIming;
