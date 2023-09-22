import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../assets/css/NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/">Volunteer Platform</NavbarBrand>
        <div className="burger-menu">
          ☰
        </div>
        <Nav className={`ml-auto ${isOpen ? 'mobile-menu-open' : ''}`} navbar>
          <NavItem className="LogOutNavbar">
            <NavLink href="/login">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <MobileMenu isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
    </div>
  );
}

function MobileMenu({ isOpen, toggleMobileMenu }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
      <NavItem>
        <NavLink href="/viewtask">Events</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact">Contact</NavLink>
      </NavItem>
    </div>
  );
}

export default NavBar;
