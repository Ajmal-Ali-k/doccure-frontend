import React, { useEffect, useState } from "react";

import { getDepartment } from "../../Api/services/ClientReq";
import { useSelector } from "react-redux";

function DoctorsFilterCard({ selected, setSelected }) {
  const { token } = useSelector((state) => state.clientLogin);

  const [departments, setDepartments] = useState([]);
  const getDepartments = async () => {
    await getDepartment(token)
      .then((data) => setDepartments(data.data.departments))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getDepartments();
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((e) => e !== value));
    }
  };

  return (
    <>
      <div className="block  mx-auto min-w-72 sm:w-[90%] md:w-[83%] lg:w-72 bg-white border border-gray-200   hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sticky top-0">
        <div className="w-full border-b-2 h-16 p-3">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            select your specialist
          </h5>
        </div>

        <div className="filter-widget p-4">
          {departments.map((val) => {
            return (
              <div key={val._id} className="p-1">
                <label className="inline-block text-sm font-normal cursor-pointer gap-2  ">
                  <input
                    type="checkbox"
                    className=" cursor-pointer"
                    name="select_specialist"
                    value={val.department}
                    onChange={handleChange}
                  />
                  <span className="px-2 text-base font-medium leading-3 capitalize" > {val.department} </span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DoctorsFilterCard;
