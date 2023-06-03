import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { forgotPwdApi, verifyotpApi } from "../../Api/services/ClientReq";
import NewPwd from "./NewPwd";
function Forgotpwd() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [emailErr, setEmailErr] = useState("");
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");
    const[otpErr,SetOtpErr]= useState("");

    const [otpverified,setOtpVerified]= useState(false);
   

    const handleEnter = async () => {
        console.log("ender");

        try {
            if (email) {
                setLoading(true);

                const response = await forgotPwdApi(email);
                if (response.data.success) {
                    setNumber(response.data.mobile);
                    setVerified(true);
                    setEmailErr("");
                    setLoading(false);
                } else {
                    setEmailErr("user not found");
                    setLoading(false);
                }
            } else {
                setEmailErr("please enter email");
            }
        } catch (error) {
            console.log(error);
        }
    };


    const handleverify = async () => {
        console.log("hiiiiiiiiii")
        try {
            if(otp.length === 6){
                
                const response = await verifyotpApi(otp,number)
                if(response.data.success){
                    setOtpVerified(true);
                    alert("verification successful")
                }else{
                    alert("verification failed")
                }

            }else{
                SetOtpErr('Otp is invalid');
            }
            
        } catch (error) {
            console.log(error);
        }
      

    }
    return (
        <div>
            {!otpverified ? (
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
                            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Enter your Email
                            </h1> */}
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    {verified === false ? (
                                        <>
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
                                                onKeyUp={() => setEmailErr("")}
                                                id="email"
                                                value={email}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                                placeholder="Enter your email"
                                            />
                                            {
                                                <div>
                                                    {emailErr && (
                                                        <span className="error text-red-400 text-sm mt-2">
                                                            {emailErr}
                                                        </span>
                                                    )}
                                                </div>
                                            }
                                        </>
                                    ) : (
                                        <>
                                            <label
                                                htmlFor=""
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                                            >
                                                Enter otp that sended *****
                                                {number?.toString().slice(-4)}
                                            </label>
                                            <input
                                                onChange={(event) => setOtp(event.target.value)}
                                                type="number"
                                                name="otp"
                                                id="otp"
                                                onKeyUp={() => SetOtpErr("")}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                                placeholder="Enter Otp"
                                            />
                                                {
                                                <div>
                                                    {otpErr && (
                                                        <span className="error text-red-400 text-sm mt-2">
                                                            {otpErr}
                                                        </span>
                                                    )}
                                                </div>
                                            }
                                        </>
                                    )}
                                </div>

                                {verified === false ? (
                                    <button
                                        onClick={handleEnter}
                                        className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Enter
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleverify}
                                        className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        verify
                                    </button>
                                )}
                                {loading && (
                                    <div className="text-center">
                                        <Spinner
                                            aria-label="Center-aligned spinner example"
                                            size="xl"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>):(
                <NewPwd mobile={number}/>
            )
}
        </div>
    );
}

export default Forgotpwd;
