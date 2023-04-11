import React, { useState } from "react";
import { Link } from "react-router-dom";

function DoctorSignupComponent() {
  const [errors, setErrors] = useState({});

  const validateFields = (data) => {
    let errors = {};

    // Validate fName
    if (!data.name.trim()) {
      errors.name = "First name is required";
    }

    // Validate Specialization
    if (!data.sepecialization) {
      errors.sepecialization = "Specialization is required";
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
    if (!data.confirmpassword) {
      errors.confirmpassword = "Confirm password is required";
    } else if (data.password !== data.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
    }

    setErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    data = {
      name: data.get("name"),
      number: data.get("number"),
      email: data.get("email"),
      address: data.get("address"),
      specialization: data.get("sepecialization"),
      certificate: data.get("certificate"),
      expirience: data.get("expirience"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
    };
    console.log(data, "this the doctor data");
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
                  required
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
                  required
                />
                {errors.phone && (
                  <span className="error text-red-400 text-sm">
                    {errors.phone}
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
                  required
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
                  required
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
                  <option value="TV">Dentist</option>
                  <option value="PC">Cardiologists</option>
                  <option value="GA">Dermatologists</option>
                  <option value="PH">Neurologists</option>
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
                  required
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
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a product description here..."
                />
                {errors.certificate && (
                  <span className="error text-red-400 text-sm">
                    {errors.certificate}
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
                  required
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
                  required
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
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-2">
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
      </section>
    </div>
  );
}

export default DoctorSignupComponent;
