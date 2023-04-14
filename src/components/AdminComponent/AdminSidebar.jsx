import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
} from "react-icons/hi";

function AdminSidebar() {
  return (
    <div>
      <div className="w-fit">
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo
            href="#"
            img={logo}
            imgAlt="Doccure logo"
          ></Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/new_doctors" icon={HiViewBoards}>
               NewDoctors
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Department
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Doctors
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}

export default AdminSidebar;
