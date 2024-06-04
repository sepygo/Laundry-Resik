import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {

  // canvas 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr className='text-center'>
            <th className='bg-primary text-white'>User Id</th>
            <th className='bg-primary text-white'>Nama User</th>
            <th className='bg-primary text-white'>Email</th>
            <th className='bg-primary text-white'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>1</td>
            <td>Administrator</td>
            <td>administrator@laundryresik.id</td>
            <td className='text-center'>
              <Button className="btn btn-sm btn-primary me-2" onClick={handleShow}><FontAwesomeIcon icon={faPen} className='mx-2'/></Button>
              <Button variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} className='mx-2'/></Button>
            </td>
          </tr>
          <tr>
            <td className='text-center'>2</td>
            <td>Dimas</td>
            <td>dimashaha@gmail.com</td>
            <td className='text-center'>
              <Button className="btn btn-sm btn-primary me-2" onClick={handleShow}><FontAwesomeIcon icon={faPen} className='mx-2'/></Button>
              <Button variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} className='mx-2'/></Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Pengguna</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <div class="mb-3">
              <label for="selectRole" class="form-label">Role Akses</label>
              <select class="mb-3 form-select" aria-label="selectRole">
                <option disabled>Pilih Akses</option>
                <option selected value="1">Admin</option>
                <option value="3">Kasir</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nama Pengguna</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Dimas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="dimashaha@gmail.com" />
              <div id="emailHelp" class="form-text">Email tidak boleh sama dengan yang lain.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" value="hahaha"/>
            </div>
            <button class="w-100 btn btn-primary">Simpan</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default UserTable;
