
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";


function Usersignup() {
    const [name, setName] = useState()
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState(null)
    const [errors,setErrors] =useState({})
    const [address,setAddress]=useState('')
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption)
      };


    const validateFields = (data) => {
        let errors = {};

        // Validate fName
        if (!data.username) {
            errors.username = "username is required";
        }
        // Validate age
        if (!data.age) {
            errors.age = "Age is required";
        } else if (data.age < 0) {
            errors.age = "Age not valid";
        }

        // Validate number
        if (!data.number) {
            errors.number = "Phone number is required";
        }

        // Validate email
        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email is invalid";
        }

        // Validate password
        if (!data.password) {
            errors.password = "Password is required";
        } else if (data.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        // Validate confirmPassword
        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm password is required";
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        // Validate address
        if (!data.address) {
            errors.address = "Address is required";
        }
        // gender address
        if (!data.sex) {
            errors.sex = "gender is required";
        }

        setErrors(errors);

        // Return true if there are no errors, false otherwise
        return Object.keys(errors).length === 0;
    };
    const handleSubmit =async (e) => {
        e.preventDefault();
        
        let data = new FormData(e.currentTarget);
        data = {
          username: data.get("username"),
          age: data.get("age"),
          sex: data.get("sex"),
          number: data.get("number"),
          email: data.get("email"),
          password: data.get("password"),
          confirmPassword: data.get("confirmPassword"),
          address: data.get("address"),
        };
        console.log(data,"this is data")
        try {
            if(validateFields(data)){
                console.log("hiiiii")
                
            }
        } catch (error) {
            
        }

    };
  return (
    < >
    <section className="bg-gray-50 dark:bg-gray-900 " >
                <div className="flex flex-col items-center justify-center px-6 py-8   mx-auto md:max-h-full  lg:py-0">
                    <Link
                        className="flex items-center mb-6 mt-4  text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img className="w-18 h-10 mr-2" src={logo} alt="logo" />
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        full name
                                    </label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your full name"
                                        
                                    />
                                </div>
                                {errors.username && ( <span className="error text-red-400 text-sm"> {errors.username}</span>)}
                               
             
  
                                <div>
                                    <label
                                        htmlFor="age"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        age
                                    </label>
                                    <input
                                        onChange={(e) => setAge(e.target.value)}
                                        type="number"
                                        name="age"
                                        id="age"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your age"
                                   
                                    />
                                </div>
                                {errors.age && ( <span className="error text-red-400 text-sm"> {errors.age}</span>)}
                                <label
                                        htmlFor="sex"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       gender
                                    </label>
                                <div className="flex  flex-wrap justify-between bg-white">
                                    <div className=" border-r text-xs py-2 border-r-black p-2 w-1/3  ">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="sex"
                                            value="male"
                                            checked={selectedOption === "male"}
                                            onChange={handleOptionChange}
                                        
                                        />
                                        <label
                                            className="inline-block px-2 text-gray-600 font-medium"
                                            htmlFor="male"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className=" w-1/3 border-r text-xs border-r-black  p-2  ">
                                        <input
                                            type="radio"
                                            id="female"
                                            name="sex"
                                            value="female"
                                            checked={selectedOption === "female"}
                                            onChange={handleOptionChange}
                                       
                                        />
                                        <label
                                            className="inline-block px-2 text-gray-600 font-medium"
                                            htmlFor="female"
                                        >
                                            Female
                                        </label>
                                    </div>
                                    <div className=" p-2 w-1/3 text-xs" >
                                        <input
                                            type="radio"
                                            id="option3"
                                            name="sex"
                                            value="others"
                                            checked={selectedOption === "others"}
                                            onChange={handleOptionChange}
                                         
                                        />
                                        <label
                                            className="inline-block px-2   text-gray-600 font-medium"
                                            htmlFor="others"
                                        >
                                            Others
                                        </label>
                                    </div>
                                </div>
                                {errors.sex && ( <span className="error text-red-400 text-sm"> {errors.sex}</span>)}
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       Address
                                    </label>
                                    <input
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your address"
                                       
                                    />
                                </div>
                                {errors.address && ( <span className="error text-red-400 text-sm"> {errors.address}</span>)}

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        email
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your email"
                                       
                                    />
                                </div>
                                {errors.email && ( <span className="error text-red-400 text-sm"> {errors.email}</span>)}
                                <div>
                                    <label
                                        htmlFor="number"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        phone
                                    </label>
                                    <input
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="number"
                                        name="number"
                                        id="number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your phone number"
                                    
                                    />
                                </div>
                                {errors.number && ( <span className="error text-red-400 text-sm"> {errors.number}</span>)}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       
                                    />
                                </div>
                                {errors.password && ( <span className="error text-red-400 text-sm"> {errors.password}</span>)}
                                <div>
                                    <label
                                        htmlFor="ConsfirmPassword"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        onChange={(e) => setConfirm(e.target.value)}
                                        type="ConsfirmPassword"
                                        name="ConsfirmPassword"
                                        id="ConsfirmPassword"
                                        placeholder="Confirm your password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       
                                    />
                                </div>
                                {errors.confirmPassword && ( <span className="error text-red-400 text-sm"> {errors.confirmPassword}</span>)}

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Sign up
                                </button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have a account ?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
      
    </>
  )
}

export default Usersignup
