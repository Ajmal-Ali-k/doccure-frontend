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
  console.log(department, "this is depatment");

  return (
    <>
          <div className="flex flex-wrap  m-5">
      {department.map((val) => {
        return (
            <div className="card m-3  card-compact w-96 bg-base-100 shadow-xl rounded-xl border-2">
              <figure >
                <img src={val.image} alt="Shoes" className="overflow-hidden"  />
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
