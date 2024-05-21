import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div className="bg-light sidenav-con vh-100 py-3">
      <div className="mb-4 d-flex align-items-center">
        <img src={avatar} alt="Admin" className="rounded-circle avatar-admin"/>
        <div style={{width: "calc(100% - 100px)"}}>
          <h5 className="text-truncate" style={{width:"100%"}}>Administrator</h5>
          <small>Admin</small>
        </div>
      </div>
      <nav className="nav flex-column">
        <NavLink to="/admin/manage-users" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCircleUser} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Kelola Pengguna
        </NavLink>
        <NavLink to="/admin/order-history" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faCartShopping} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Riwayat Pemesanan
        </NavLink>
        <NavLink to="/admin/tracking-code" className={({ isActive }) => isActive ? 'nav-link active bg-primary text-white' : 'nav-link'}>
          <FontAwesomeIcon icon={faLocationDot} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Kode Tracking
        </NavLink>
        <NavLink to="/logout" className="nav-link">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='me-3' style={{width:"25px",fontSize:"20px"}}/>Keluar
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
