import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import '../styles/admin/style.css';

import Header from '../components/admin/Header';
import SideNav from '../components/admin/SideNav';
import NotFound from '../pages/404';

import TestDashboard from '../pages/admin/TestDashboard';
import ManageUsersPage from '../pages/admin/ManageUsersPage';
import OrderHistoryPage from '../pages/admin/OrderHistoryPage';
import TrackingCodePage from '../pages/admin/TrackingCodePage';
import OrderPage from '../pages/admin/OrderPage';

const AdminRoutes = () => {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <div className="d-flex flex-grow-1 main-layout-con">
                <SideNav />
                <div className="bg-light flex-grow-1 admin-content-con">
                    <Routes>
                        <Route path="/" element={<Navigate to="order" replace />} />
                        <Route path="manage-users" element={<ManageUsersPage />} />
                        <Route path="order-history" element={<OrderHistoryPage />} />
                        <Route path="tracking-code" element={<TrackingCodePage />} />
                        <Route path="order" element={<OrderPage />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </div>
            </div>
        </div>
      );
};

export default AdminRoutes;
