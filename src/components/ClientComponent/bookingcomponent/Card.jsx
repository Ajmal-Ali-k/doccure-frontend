import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filteredSlot, getDoctorDetail } from "../../../Api/services/ClientReq";
import { message } from "antd";
import Paypal from "../paypal/Paypal";

function Card() {
  const { token } = useSelector((state) => state.clientLogin);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [doctor, setDoctor] = useState();
  const [filterSlots, setfilterSlot] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [timing, setTiming] = useState({
    start:'',end:""
  })
  const [documentId,setDocumentId] = useState("")

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleSubmit = () => {
    if (checkedValues.length !== 0) {
      setSubmit(true);
    } else {
      message.error("select a slot ");
    }
  };
  const GetDoctor = async () => {
    const response = await getDoctorDetail(id, token);
    if (response.data.success) {
      setDoctor(response.data.Doctor);
    }
  };
  const handleCheckboxChange = (e,start,end) => {

    const value = e.target.value;

    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedValues([...checkedValues, value]);
      setTiming({start:start,end:end})
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }
  };
  useEffect(() => {
    GetDoctor();
  }, []);

  const data = {
    id,
    selectedDate,
  };
  const filtered = async () => {
    const response = await filteredSlot(data, token);
    if (response.data.success) {
      setfilterSlot(response.data.slots);
      setDocumentId(response.data.DocumentId)
    } else {
      console.log("not availlable");
    }
  };

  useEffect(() => {
    filtered();
    // eslint-disable-next-line
  }, [selectedDate]);

  return (
    <>
      <div className=" w-full    max-container h-screen">
        <div className="bg-white shadow-xl rounded-lg ">
          <div className="photo-wrapper py-8">
            <img
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
              src={doctor?.photo}
              alt="doctor"
            />
          </div>
          <div className="mb-4">
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
            <div className="">
              <div className="flex justify-center items-center">
                <label htmlFor="date" className="block mb-2 text-gray text-md">
                  Select a date
                </label>
              </div>
              <div className="flex justify-center items-center mb-3">
                <input
                  type="date"
                  min={disablePastDate()}
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="rounded border-gray-400"
                />
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-center">
                <label htmlFor="date" className="block mb-2 text-gray text-md">
                  Select a Slot
                </label>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {filterSlots ? (
                  filterSlots?.map((val, i) => {
                    return (
                      <div className="mx-2 mb-3 flex justify-center items-center">
                        <input
                          defaultChecked={false}
                          onChange={(e)=>handleCheckboxChange(e,val.start,val.end) }
                          id={`default-checkbox${i}`}
                          type="checkbox"
                          value={val.objectId}
                          class={`${
                            val.booked === true &&
                            " pointer-events-none opacity-50"
                          } w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 mx-2 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 `}
                        />

                        <label
                          htmlFor={`default-checkbox${i}`}
                          className={`${
                            val.booked === true
                              ? "bg-gray-500   text-white rounded-xl  pointer-events-none opacity-50 h-12 w-32  text-center flex items-center justify-center"
                              : "bg-cyan-500  text-white rounded-xl h-12 w-32  text-center flex items-center justify-center"
                          }`}
                        >
                          {val.start}-{val.end}
                        </label>
                      </div>
                    );
                  })
                ) : (
                  
                  
                  <div className="font-sans col-span-4   flex items-center justify-center mt-3">
                    <h4 className="text-red-500  mx-auto hover:text-red-800">
                      Sorry not available this date !!
                    </h4>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={handleSubmit}
                className="bg-blue-700 hover:bg-blue-900 text-white rounded-md py-2 px-2"
              >
                Book now
              </button>
            </div>
            <div className=" mt-10 flex justify-center items-center">
              {submit && (
                <Paypal amount={doctor?.fee} checkedValues={checkedValues} timing ={timing} date ={selectedDate} documentId={documentId}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
