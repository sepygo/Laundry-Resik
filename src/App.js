// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import AdminPage from './components-admin/AdminPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
// import HeaderAdmin from './components-admin/HeaderAdmin';
// import SideNav from './components-admin/SideNav';
// import Content from './components-admin/Content';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/order" element={<OrderPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} /> */}
        <Route path="/*" element={<LandingPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        {/* <Route path="/admin" element={
          <div className="d-flex flex-column h-100">
            <HeaderAdmin />
            <div className="d-flex flex-grow-1">
              <SideNav />
              <div className="flex-grow-1 p-3">
                <Content />
              </div>
            </div>
          </div>
        } /> */}
      </Routes>
    </Router>
  );
}

export default App;
