import { Link } from "react-router-dom";
import bannerimg from "../../Assets/banner-img.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
function BannerFirst() {
  const { token } = useSelector((state) => state.clientLogin);
  return (
    <section
      id="banner-1"
      className="flex flex-col md:flex-row max-container "
    >
      <div className="w-full md:w-[40%] flex justify-center content-center ">
        <div className="pt-20 lg:p-44">
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
            <Link to="/login">
            <span className="cursor-pointer  flex justify-center items-center mt-10 font-semibold text-md w-48 bg-[#194569] p-2  text-white hover:text-black rounded">
              Appointment
              <ArrowForwardIcon
                style={{ marginLeft: "10px", marginTop: "5px" }}
              />
            </span>
            </Link>
          )}
        </div>
      </div>
      <div
        className="w-full  md:w-[60%]"
       
      >
        <div className=" inset-0 flex items-center justify-center pt-10">
          <div className=" mb-5 lg:p-12 ">
            <img
              src={bannerimg}
              alt=""
              width={432}
              height={510}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerFirst;
