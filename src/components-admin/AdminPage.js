import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './layout/Header';
import SideNav from './layout/SideNav';
import ManageUsersPage from './ManageUsersPage';
import OrderHistoryPage from './OrderHistoryPage';
import TrackingCodePage from './TrackingCodePage';

const AdminLayout = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <SideNav />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Navigate to="manage-users" replace />} />
            <Route path="manage-users" element={<ManageUsersPage />} />
            <Route path="order-history" element={<OrderHistoryPage />} />
            <Route path="tracking-code" element={<TrackingCodePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
