import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Form, FormControl} from 'react-bootstrap';
import logo from '../../assets/logo-white.png';

const Header = ({ token, onLogout }) => {
  return (
    <Navbar bg="white" expand="lg" className='admin-header-nav border-bottom'>
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className='admin-header-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* {token && <button className="btn btn-sm btn-danger ms-auto fw-bold" onClick={onLogout}>Keluar <i class="bi-box-arrow-in-right"></i></button>} */}
          {/* <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Cari..."
              className="me-2"
              aria-label="Search"
            />
          </Form> */}
          <h5 className='mb-0 ms-auto'>Laundry Resik <span className='text-primary'>Dashboard</span></h5>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
