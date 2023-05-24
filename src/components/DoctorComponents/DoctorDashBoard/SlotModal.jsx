import React, { useEffect, useState } from "react";
import { getSlot } from "../../../Api/services/DoctorReq";
import Modal from "react-modal";
import { useSelector } from "react-redux";

function SlotModal(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "350px",
      width: "380px",
    },
  };
  console.log(props.values);
  const data = props.values;
  const { token } = useSelector((state) => state.doctorLogin);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [slot, setSlot] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  console.log(selectedData, 33333);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const getSlots = async () => {
    const response = await getSlot(token);
    if (response.data.success) {
      setSlot(response.data.result);
    }
  };
  useEffect(() => {
    getSlots();
  }, [data]);

  console.log(slot, 111);
  return (
    <div className="mt-4 space-y-6 space-x-4 ">
      {/* <h1 className="font-serif font-bold">Available Slots</h1> */}

      {slot.map((item, i) => {
        return (
          <button
            onClick={() => {
              openModal();
              setSelectedData(item);
            }}
            className="bg-red-700 hover:bg-red-900  text-white font-bold py-2 px-4 rounded-full"
          >
            TimeSlots-{i + 1}
          </button>
        );
      })}

      {selectedData && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div class="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
            <div class="flex items-center justify-between w-full mb-6">
              <p class="text-xl font-medium text-gray-800 dark:text-white">
                Details
              </p>
              <button class="flex items-center text-gray-800 border-0 hover:text-black dark:text-gray-50 dark:hover:text-white focus:outline-none"></button>
            </div>
            <div class="flex items-center justify-between p-3 mb-2 bg-green-100 rounded">
              <div class="flex items-center justify-between w-full ml-2">
                <p>date</p>
                <p className="font-medium">{new Date(selectedData.date).toDateString()}</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 mb-2 bg-purple-100 rounded">
              <div class="flex items-center justify-between w-full ml-2">
                <p>Starting Time</p>
                <p>{selectedData.startTime}</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 mb-2 bg-yellow-100 rounded">
              <div class="flex items-center justify-between w-full ml-2">
                <p>End Time</p>
                <p>{selectedData.endTime}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SlotModal;
