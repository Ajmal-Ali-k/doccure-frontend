
import {Link} from 'react-router-dom'
 import doctorImage from '../../Assets/doctor-image.jpg'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function BannerFirst() {
  const client = false
  return (
    <div >
      <div className="flex flex-col md:flex-row">
        <div className="  w-full   bg-[#D6E8EE] md:w-[40%] flex justify-center content-center">
          <div className="p-20 lg:p-44">
            <h1 className=" text-4xl font-serif font-bold ">
              LET'S FIND YOUR DOCTOR
            </h1>
            {client ? (
              <Link to="/service">
                <span className="cursor-pointer  flex justify-center  mt-10 font-semibold text-xl w-48 bg-[#194569] p-2  text-white hover:text-black">
                  Appointment
                  <ArrowForwardIcon
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                  />
                </span>
              </Link>
            ) : (
              <span className="cursor-pointer  flex justify-center  mt-10 font-semibold text-xl w-48 bg-[#194569] p-2  text-white hover:text-black">
                Appointment
                <ArrowForwardIcon
                  style={{ marginLeft: "10px", marginTop: "5px" }}
                />
              </span>
            )}
          </div>
        </div>
        <div className="w-full  bg-white  md:w-[60%] p-4">
          <div className=" inset-0 flex items-center justify-center ">
            <div className="bg-white mb-5 lg:p-12  ">
              <img src={doctorImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerFirst;
