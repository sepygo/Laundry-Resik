import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HeaderNotch from './layout/HeaderNotch';
import HeaderNav from './layout/HeaderNav';
import Footer from './layout/Footer';

import HomePage from './HomePage';
import ServicePage from './ServicePage';
import OrderPage from './OrderPage';
import TestiPage from './TestiPage';
import TrackPage from './TrackPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';

const Header = () => {
    const location = useLocation();
    return location.pathname === '/' ? <HeaderNotch /> : <HeaderNav />;
};

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="layanan" element={<ServicePage />} />
          <Route path="pemesanan" element={<OrderPage />} />
          <Route path="testimoni" element={<TestiPage />} />
          <Route path="lacak" element={<TrackPage />} />
          <Route path="hubungi-kami" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <Footer />
    </div>


    // <div>
    //   <Header />
    //   <div className="d-flex flex-grow-1 main-layout-con">
    //     <SideNav />
    //     <div className="bg-light flex-grow-1 admin-content-con">
    //       <Routes>
    //         <Route path="/" element={<Navigate to="order" replace />} />
    //         <Route path="manage-users" element={<ManageUsersPage />} />
    //         <Route path="order-history" element={<OrderHistoryPage />} />
    //         <Route path="tracking-code" element={<TrackingCodePage />} />
    //         <Route path="order" element={<OrderPage />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingPage;
