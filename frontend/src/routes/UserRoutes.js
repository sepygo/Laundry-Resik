import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../styles/user/style.css';

import HeaderNotch from '../components/user/HeaderNotch';
import HeaderNav from '../components/user/HeaderNav';
import Footer from '../components/user/Footer';
import NotFound from '../pages/404';

// import TestUser from '../pages/user/TestUser';
import HomePage from '../pages/user/HomePage';
import ServicePage from '../pages/user/ServicePage';
import OrderPage from '../pages/user/OrderPage';
import TestiPage from '../pages/user/TestiPage';
import TrackPage from '../pages/user/TrackPage';
import ContactPage from '../pages/user/ContactPage';
import TrackResultPage from '../pages/user/TrackResultPage'
import LoginPage from '../pages/user/LoginPage';

const Header = () => {
    const location = useLocation();
    return location.pathname === '/' ? <HeaderNotch /> : <HeaderNav />;
};

const UserRoutes = () => {
    return(
        <div className='landing-page'>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="layanan" element={<ServicePage />} />
                <Route path="pemesanan" element={<OrderPage />} />
                <Route path="testimoni" element={<TestiPage />} />
                <Route path="lacak" element={<TrackPage />} />
                <Route path="hubungi-kami" element={<ContactPage />} />
                <Route path="detail-lacak/:tc" element={<TrackResultPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
        </div>
    );
};

export default UserRoutes;
