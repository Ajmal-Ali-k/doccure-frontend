import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filteredSlot, getDoctorDetail } from "../../../Api/services/ClientReq";

function Card() {
  const { token } = useSelector((state) => state.clientLogin);
  console.log(token, "this is user token");
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [doctor, setDoctor] = useState();

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const handleDateChange =(event)=>{
    setSelectedDate(event.target.value)

  }
  const GetDoctor = async () => {
    const response = await getDoctorDetail(id, token);
    if (response.data.success) {
      setDoctor(response.data.Doctor);
    }
  };
  useEffect(() => {
    GetDoctor();
  }, []);

  const data = {
    id,
    selectedDate,
  };
  const date = new Date();
  let currentDate = new Date(date.setUTCHours(0, 0, 0, 0));
  console.log(currentDate, "this is the current date");
  const filtered = async () => {
    const response = await filteredSlot(data, token);
    if (response.data.success) {
      alert("success");
    }
  };

  useEffect(() => {
    filtered();
  }, [selectedDate]);
  console.log(doctor, "this si thsi sthe doctor dataaaaa");
  console.log(selectedDate, "this si hedata");
  return (
    <>
      <div className="w-3/5 ">
        <div className="bg-white shadow-xl rounded-lg py-3 ">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
              src={doctor?.photo}
              alt="doctor"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Dr.{doctor?.name}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>Mbbs Md</p>
            </div>
            <table className="text-xs my-3 flex items-center justify-center">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    consultation fee
                  </td>
                  <td className="px-2 py-2">${doctor?.fee}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center items-center mb-2">
              <div className="">
                <label htmlFor="date" className="block mb-2 text-gray text-md">
                  Select a date
                </label>
                <input
                  type="date"
                  min={disablePastDate()}
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="rounded border-gray-400"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="">
                <label htmlFor="date" className="block mb-2 text-gray text-md">
                  Select a Slot
                </label>
                <hr className="mb-3" />
                <div className="space-x-3">
                  <button className="btn btn-primary">Slot-1</button>
                  <button className="btn btn-primary">Slot-2</button>
                  <button className="btn btn-primary">Slot-3</button>
                  <button className="btn btn-primary">Slot-4</button>
                  <button className="btn btn-primary">Slot-5</button>
                  <button className="btn btn-primary">Slot-6</button>
                </div>
              </div>
            </div>
            {/* <div className="font-sans flex justify-center mt-4">
              <h4>Sorry not available this date !!</h4>
            </div> */}
            <div>
              <button className="btn btn-primary">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
