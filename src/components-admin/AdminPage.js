import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './layout/Header';
import SideNav from './layout/SideNav';
import ManageUsersPage from './ManageUsersPage';
import OrderHistoryPage from './OrderHistoryPage';
import TrackingCodePage from './TrackingCodePage';
import OrderPage from './OrderPage';

const AdminLayout = () => {
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
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
