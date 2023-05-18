import { Link } from "react-router-dom";
import bannerimg from "../../Assets/banner-img.png";
import nurse from "../../Assets/nurse.jpeg"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import backgroundImage from "../../Assets/banner-bg.png"
import { useSelector } from "react-redux";
function BannerFirst() {
  const { token } = useSelector((state) => state.clientLogin);
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="  w-full   md:w-[40%] flex justify-center content-center" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="p-20 lg:p-44">
            <h1 className=" text-4xl font-serif font-bold ">
              LET'S FIND YOUR DOCTOR
            </h1>
            {token ? (
              <Link to="/doctors">
                <span className="cursor-pointer  flex justify-center items-center mt-10 font-semibold text-md w-48 bg-[#194569] p-2  text-white hover:text-black rounded">
                  Appointment
                  <ArrowForwardIcon
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                  />
                </span>
              </Link>
            ) : (
              <span className="cursor-pointer  flex justify-center items-center mt-10 font-semibold text-md w-48 bg-[#194569] p-2  text-white hover:text-black rounded">
                Appointment
                <ArrowForwardIcon
                  style={{ marginLeft: "10px", marginTop: "5px" }}
                />
              </span>
            )}
          </div>
        </div>
        <div className="w-full  bg-white  md:w-[60%]">
          <div className=" inset-0 flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage})`}} >
            <div className="bg-white mb-5 lg:p-12`" >
              <img src={bannerimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerFirst;
