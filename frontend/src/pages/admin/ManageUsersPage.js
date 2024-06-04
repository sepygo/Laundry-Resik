import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import UserTable from '../../components/admin/UserTable';
import { Form, FormControl} from 'react-bootstrap';

const ManageUsersPage = () => {
  
  // canvas 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Kelola Akses Pengguna</h2>
        <Button className="btn btn-lg btn-primary py-3 px-4" onClick={handleShow}>+ Tambah Akses</Button>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <label>Tampilkan </label>
          <select className="form-select d-inline w-auto ms-2" aria-label="Entries">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label className="ms-2">Entri</label>
        </div>
        <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Cari..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
      </div>
      <UserTable />

      <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tambah Pengguna</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <div class="mb-3">
                <label for="selectRole" class="form-label">Role Akses</label>
                <select class="mb-3 form-select" aria-label="selectRole">
                  <option selected disabled>Pilih Akses</option>
                  <option value="1">Admin</option>
                  <option value="3">Kasir</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nama Pengguna</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">Email tidak boleh sama dengan yang lain.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type='button' class="w-100 btn btn-primary" onClick={handleShow}>+ Tambah</button>
            </form>
          </Offcanvas.Body>
        </Offcanvas>

      
    </div>
  );
};

export default ManageUsersPage;
