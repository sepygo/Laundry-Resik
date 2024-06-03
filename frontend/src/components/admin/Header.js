import React from 'react';
import { Navbar, Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo-white.png';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className='admin-header-nav border-bottom'>
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className='admin-header-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Cari..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
