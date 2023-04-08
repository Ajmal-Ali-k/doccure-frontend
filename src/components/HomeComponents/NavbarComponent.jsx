/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react";
import { Button, Navbar, Dropdown, Avatar } from "flowbite-react";
import logo from '../../Assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../store/slice/userSlice";


function NavbarComponent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { client } = useSelector((state) => state.clientLogin)
  const handleLogout = () => {
    localStorage.removeItem("clientToken");
    dispatch(setLogout())
    navigate('/')
  }
  return (

    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />

      </Navbar.Brand>
      {
        !client && <div className="flex md:order-2">

          <Link to='/login'>
            <Button>Login</Button>
          </Link>
          <Navbar.Toggle />
        </div>


      }
      {
        client && <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
          >
            {/* <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header> */}
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              logout
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      }
      <Navbar.Collapse>
        <Navbar.Link href="/" >
          Home
        </Navbar.Link>
        {/* <Navbar.Link href="/navbars">About</Navbar.Link> */}
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavbarComponent;
