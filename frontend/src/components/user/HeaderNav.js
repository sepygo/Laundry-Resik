import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-white.png';

const HeaderNav = () => {
  return (
    <header className="border-bottom">
      <div className="container-fluid bg-white">
        <div className="container">
            <div className="row">
            <div className="col-12 bg-white">
                <nav className="d-flex justify-content-between align-items-center">
                <img src={logo} alt="" height={58} />
                <div className="d-flex justify-content-around align-items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                        Beranda
                    </NavLink>
                    <NavLink to="/layanan" className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                        Layanan
                    </NavLink>
                    <NavLink to="/pemesanan" className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                        Pemesanan
                    </NavLink>
                    <NavLink to="/testimoni" className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                        Testimoni
                    </NavLink>
                    <NavLink to="/lacak" className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                        Cek Pesanan
                    </NavLink>
                </div>
                <div className="d-flex align-items-center">
                    <a href="/login" style={{visibility:"hidden"}} className="py-3 px-5 btn btn-secondary fw-bold">Masuk</a>
                </div>
                </nav>
            </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
