import React from "react";
import DepartmentCard from "../../components/ClientComponent/Department/DepartmentCard";
import Layout from "../../components/layout/Layout";

function Department() {
  return (
    <Layout>
      <section className="w-full  h-full bg-slate-100">
        <div className="w-full flex flex-col justify-center items-center max-container">
          <div className="w-[85%]  bg-white border rounded-xl border-black m-4">
            <h2 className="text-center text-4xl font-serif font-normal m-4">
              Our Departments
            </h2>
          </div>
          <div className="flex flex-wrap ">
            <DepartmentCard />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Department;
