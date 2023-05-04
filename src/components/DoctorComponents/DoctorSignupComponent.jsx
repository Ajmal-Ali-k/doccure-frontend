import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import axios from "../../Axios/Axios";
import { getDepartment } from "../../Api/services/DoctorReq";

function DoctorSignupComponent() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    await getDepartment()
      .then((data) => {
        setDepartments(data.data.departments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDepartments();
  }, []);
  console.log(departments, "this is departments signup");

  const toBase64 = (image) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    }).catch((err) => {
      console.log(err);
    });

  const validateFields = (data) => {
    let errors = {};

    // Validate fName
    if (!data.name.trim()) {
      errors.name = "First name is required";
    }

    // Validate Specialization
    if (!data.specialization) {
      errors.specialization = "Specialization is required";
    }

    // Validate experience
    if (!data.expirience) {
      errors.expirience = "Experience is required";
    } else if (parseInt(data.expirience) < 0) {
      errors.expirience = "Experiance is invalid";
    }

    // location licenceImg
    if (!data.certificate.name) {
      errors.certificate = "licence is required";
    }
    if (!data.photo.name) {
      errors.photo = "licence is required";
    }

    // Validate number
    if (!data.number) {
      errors.number = "Phone number is required";
    }
    // Validate address
    if (!data.address) {
      errors.address = "Address is required";
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
    if (!data.confirmpassword) {
      errors.confirmpassword = "Confirm password is required";
    } else if (data.password !== data.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
    }

    setErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    data = {
      name: data.get("name"),
      number: data.get("number"),
      email: data.get("email"),
      address: data.get("address"),
      specialization: data.get("specialization"),
      certificate: data.get("certificate"),
      photo: data.get("photo"),
      expirience: data.get("expirience"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
    };

    try {
      if (validateFields(data)) {
        setLoading(true);
        setError(null);
        const image = await toBase64(data.certificate);
        const photo = await toBase64(data.photo);
        data.certificate = image;
        data.photo = photo;
        axios
          .post("/doctors/signup", {
            data,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              setLoading(false);
              message.success("Registration successfully compeleted");
              navigate("/doctor/doctor_verification");
            } else {
              console.log("fuddfgdf");
              setLoading(false);
              setError(res.data.message);
              message.error(res.data.message).then(() => {
                setError(null);
              });
            }
          });
      }
    } catch (error) {
      console.log(error);
      message.error("some went wrong !");
    }
  };

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16 ">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Start your career
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="error text-red-400 text-sm">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your phone number"
                />
                {errors.number && (
                  <span className="error text-red-400 text-sm">
                    {errors.number}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="error text-red-400 text-sm">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your address"
                />
                {errors.address && (
                  <span className="error text-red-400 text-sm">
                    {errors.address}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="specialization"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Specialization
                </label>

                <select
                  id="specialization"
                  name="specialization"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected> </option>
                  {departments.map((val) => {
                    return (
                      <option value={val.department}>{val.department}</option>
                    );
                  })}
                </select>
                {errors.specialization && (
                  <span className="error text-red-400 text-sm">
                    {errors.specialization}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="expirence"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Expireance
                </label>
                <input
                  type="number"
                  name="expirience"
                  id="expirience"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your number of Expirience"
                />
                {errors.expirience && (
                  <span className="error text-red-400 text-sm">
                    {errors.expirience}
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="certificate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload your certificate
                </label>
                <input
                  id="certificate"
                  name="certificate"
                  type="file"
                  className="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a product description here..."
                />
                {errors.certificate && (
                  <span className="error text-red-400 text-sm">
                    {errors.certificate}
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload your photo
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  className="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a product description here..."
                />
                {errors.photo && (
                  <span className="error text-red-400 text-sm">
                    {errors.photo}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  password
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span className="error text-red-400 text-sm">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="confirmpassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="text"
                  name="confirmpassword"
                  id="confirmpassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Confirm password"
                />
                {errors.confirmpassword && (
                  <span className="error text-red-400 text-sm">
                    {errors.confirmpassword}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
            {loading && (
              <div className="text-center mt-3">
                <Spinner
                  aria-label="Center-aligned spinner example"
                  size="xl"
                />
              </div>
            )}
            {error && (
              <div className="error text-center w-full p-2 bg-red-600 bg-opacity-30 text-red-500">
                {error}
              </div>
            )}

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-2">
              Already have a account ?{" "}
              <Link
                to="/doctor/doctor_login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default DoctorSignupComponent;
