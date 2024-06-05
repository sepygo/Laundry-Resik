import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validasi login di sini, misalnya dengan API call
    // Jika berhasil, arahkan ke halaman admin
    navigate('/admin/');
  };

  return (
    <section className="py-5 login-hero bg-sm-light bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 bg-white border-sm p-0">
            <h2 className="fw-bold form-title p-4 m-0 text-center text-sm-start">Masuk</h2>
            <form className="border-sm-top form-box p-4" onSubmit={handleLogin}>
              <div className="form-group mb-4">
                <label className='mb-2' htmlFor="exampleInputEmail1">Alamat Email</label>
                <input type="text" className="form-control bg-light border-0 py-2" placeholder="Masukan email yang terdaftar" id="uname" value={uname} onChange={(e) => setUname(e.target.value)} required />
              </div>
              <div className="form-group border-sm-bottom pb-4">
                <label className='mb-2' htmlFor="exampleInputPassword1">Kata Sandi</label>
                <input type="password" className="form-control bg-light border-0 py-2" placeholder="Kata Sandi" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="mt-3 d-flex flex-column align-items-center">
                <button type="submit" className="py-2 px-5 py-sm-3 px-sm-5 btn btn-dark fw-bold my-2">Masuk</button>
                <small id="emailHelp" className="form-text text-muted">Belum punya akun? <a href="register.html">Daftar</a></small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    // <div className="container mt-5">
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label">Email address</label>
    //       <input type="text" className="form-control" id="uname" value={uname} onChange={(e) => setUname(e.target.value)} required />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">Password</label>
    //       <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     </div>
    //     <button type="submit" className="btn btn-primary">Login</button>
    //   </form>
    // </div>
  );
};

export default LoginPage;
