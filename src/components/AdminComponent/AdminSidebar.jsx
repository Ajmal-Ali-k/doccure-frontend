import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Sidebar } from "flowbite-react";
import { useDispatch } from "react-redux";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  // HiArrowSmRight,
  HiTable,
} from "react-icons/hi";
import { setLogout } from "../../store/slice/adminSlice";

function AdminSidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.removeItem("adminToken")
    dispatch(setLogout())
    navigate('/admin')

  }
  return (
    <div>
      <div className="w-fit ">
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
              <Sidebar.Item href="/admin/department" icon={HiInbox}>
                Department
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Doctors
              </Sidebar.Item>
              {/* <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item> */}
              <Sidebar.Item   icon={HiTable}>
              <div onClick={handlelogout}>Logout</div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}

export default AdminSidebar;
