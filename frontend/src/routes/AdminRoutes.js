import React, {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import '../styles/admin/style.css';

import Header from '../components/admin/Header';
import SideNav from '../components/admin/SideNav';
import NotFound from '../pages/404';

// import TestDashboard from '../pages/admin/TestDashboard';
import DashboardPage from '../pages/admin/DashboardPage';
import ManageUsersPage from '../pages/admin/ManageUsersPage';
import OrderHistoryPage from '../pages/admin/OrderHistoryPage';
import TrackingCodePage from '../pages/admin/TrackingCodePage';
import OrderPage from '../pages/admin/OrderPage';
import ManageServicePage from '../pages/admin/ManageServicePage';
import LoginPage from '../pages/admin/Login';

const AdminRoutes = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
  
    const handleLogin = (token) => {
      setToken(token);
    };

    const handleLogout = () => {
      localStorage.removeItem('token');
      setToken(null);
    };

    return (
        <div className="d-flex flex-column h-100">
            <Header token={token}/>
            {!token ? (
                <LoginPage onLogin={handleLogin} />
            ) : (
                <div className="d-flex flex-grow-1 main-layout-con">
                    <SideNav onLogout={handleLogout} />
                    <div className="bg-light flex-grow-1 admin-content-con">
                        <Routes>
                            <Route path="/" element={<Navigate to="dashboard" replace />} />
                            <Route path="dashboard" element={<DashboardPage />} />
                            <Route path="manage-users" element={<ManageUsersPage />} />
                            <Route path="order-history" element={<OrderHistoryPage />} />
                            <Route path="tracking-code" element={<TrackingCodePage />} />
                            <Route path="manage-service" element={<ManageServicePage />} />
                            <Route path="order" element={<OrderPage />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                </div>
            )}
        </div>
      );
};

export default AdminRoutes;
