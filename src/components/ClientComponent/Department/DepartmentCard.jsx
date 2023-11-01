import React, { useEffect, useState } from "react";
import Image from "../../../Assets/doctor-image.jpg";
import { getDepartment } from "../../../Api/services/ClientReq";
import { useSelector } from "react-redux";

function DepartmentCard() {
  const { token } = useSelector((state) => state.clientLogin);
  const [department, setDepartment] = useState([]);

  const getDepartments = async () => {
    await getDepartment(token)
      .then((data) => setDepartment(data.data.departments))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <>
      <div className="flex flex-wrap  mx-24 my-3">
        {department.map((val) => {
          return (
            <div className="card m-3 card-compact w-96 bg-base-100  rounded-xl border-2">
              <figure className="h-52 w-full">
                <img
                  src={val.image}
                  width={380}
                  height={250}
                  alt="department"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-medium">
                  {val.department}
                </h2>
                <p>{val.discription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DepartmentCard;
