import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import axios from "../../Axios/Axios";
import { message } from "antd";
import { Spinner } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setLogin } from '../../store/slice/userSlice'
import Forgotpwd from "./Forgotpwd";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false)
  const [forgot,setForgot]= useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    try {

      setLoading(true)
      setErrors(null);
      axios.post('/login', { email, password }).then((response) => {
        const result = response.data;
        if (result.success) {
          localStorage.setItem('clientToken', JSON.stringify(result));
          dispatch(setLogin({
            client: "client",
            name: result.clientName,
            token: result.clientToken,
            Id:result.clientId
          }))
          setLoading(false)
          message.success('Login Successfully')
          navigate('/')
        }
        else {
          setLoading(false);
          setErrors(result.message);
          message.error(result.message).then(() => {
            setErrors(null);
          });

        }
      })
    } catch (error) {
      console.log(error);
      message.error('something went wrong');
    }

  };
  return (
    <div>
      { !forgot ? (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-18 h-10 mr-2" src={logo} alt="logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2"
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
                  <div className="flex items-start">
             
                  </div>
                  <div
                
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={()=>setForgot(true)}>
                    Forgot password?
                  </div>
                </div>
                {errors && (
                  <span className="error text-red-400 text-sm">
              
                    {errors}
                  </span>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                {loading && <div className="text-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Are you a Doctor ?
                  <Link
                    to="/doctor/doctor_login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      ):(<Forgotpwd/>)}
    </div>
  );
}

export default UserLogin;
