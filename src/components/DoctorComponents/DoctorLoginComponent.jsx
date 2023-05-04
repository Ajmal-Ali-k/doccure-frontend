import React, { useState } from "react";
import doctorImage from "../../Assets/OQ6UTW0.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spinner } from "flowbite-react";
import { message } from "antd";
import { doctorLogin } from "../../Api/services/DoctorReq";
import {setLogin} from '../../store/slice/doctorSlice'
function DoctorLoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const data={email,password}
   try {
    const response = await doctorLogin(data)
    console.log(response)
    if(response.data.success){
      localStorage.setItem('adminToken',JSON.stringify(response.data))
      dispatch(setLogin({
        doctor:"doctor",
        name:response.data.doctorName,
        token:response.data.doctorToken

      }))
      setLoading(false)
      message.success('Login successfully')
      navigate('/doctor/dashboard');


    }else{
      setLoading(false)
      setErrors(response.data.message)
      message.error(response.data.message).then(()=>{
        setErrors(null)
      })
    }
    
   } catch (error) {
    console.log(error)
    message.error('some thing went wrong')
   }
  };

  return (

    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          ></Link>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1> */}
              <div className="flex items-center justify-center">
                <img
                  src={doctorImage}
                  alt="Doctor"
                  className="w-36 h-36 rounded-full mb-1 "
                />
              </div>
              <h1 className="text-3xl font-bold mb-4 flex items-center justify-center ">Doctor Login</h1>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    placeholder="Enter your email"
                  />
                  {/* </div>
              {errors.email && (
                <span className="error text-red-400 text-sm">
                  {" "}
                  {errors.email}
                </span>
              )}
              <div> */}
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                {errors && (
                  <span className="error text-red-400 text-sm">{errors}</span>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                {loading && (
                  <div className="text-center">
                    <Spinner
                      aria-label="Center-aligned spinner example"
                      size="xl"
                    />
                  </div>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/doctor/doctor_signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorLoginComponent;
