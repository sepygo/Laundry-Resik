import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faListCheck, faArrowRightFromBracket, faCashRegister, faTShirt, faClockRotateLeft, faTableColumns } from '@fortawesome/free-solid-svg-icons';

const SideNav = ({ user, onLogout }) => {
  return (
    <div className="bg-white sidenav-con py-3">
      <div className="mb-4 d-flex align-items-center">
        <img src={avatar} alt="Admin" className="rounded-circle avatar-admin"/>
        <div style={{width: "calc(100% - 100px)"}}>
          <h5 className="text-truncate" style={{width:"100%"}}>{user.username}</h5>
          <small>{user.role}</small>
        </div>
      </div>
      <nav className="nav flex-column">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faTableColumns} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Dashboard
        </NavLink>
        <NavLink to="/admin/order" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCashRegister} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Kasir
        </NavLink>

        <NavLink to="/admin/tracking-code" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faListCheck} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Pesanan
        </NavLink>

        <NavLink to="/admin/manage-service" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faTShirt} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Layanan
        </NavLink>
        
        <NavLink to="/admin/order-history" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faClockRotateLeft} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Riwayat
        </NavLink>
        
        <NavLink to="/admin/manage-users" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCircleUser} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Pengguna
        </NavLink>
        <button className="nav-link text-start" onClick={onLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Keluar
        </button>
      </nav>
    </div>
  );
};

export default SideNav;
