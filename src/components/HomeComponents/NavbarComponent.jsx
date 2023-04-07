import React from "react";
import { Button, Navbar } from "flowbite-react";
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
  
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        
        </Navbar.Brand>
        <div className="flex md:order-2">
      
         <Link to='/login'>
         <Button>Login</Button>
         </Link>
          <Navbar.Toggle />
        </div>
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
