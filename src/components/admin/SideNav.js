import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCartShopping, faLocationDot, faArrowRightFromBracket, faCashRegister } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div className="bg-white sidenav-con py-3">
      <div className="mb-4 d-flex align-items-center">
        <img src={avatar} alt="Admin" className="rounded-circle avatar-admin"/>
        <div style={{width: "calc(100% - 100px)"}}>
          <h5 className="text-truncate" style={{width:"100%"}}>Giselle</h5>
          <small>Admin</small>
        </div>
      </div>
      <nav className="nav flex-column">
      <NavLink to="/admin/order" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCashRegister} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Buat Pesanan
        </NavLink>
        <NavLink to="/admin/manage-users" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCircleUser} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Kelola Pengguna
        </NavLink>
        <NavLink to="/admin/order-history" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCartShopping} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Riwayat Pemesanan
        </NavLink>
        <NavLink to="/admin/tracking-code" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faLocationDot} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Kode Tracking
        </NavLink>
        <NavLink to="/login" className="nav-link">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Keluar
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
