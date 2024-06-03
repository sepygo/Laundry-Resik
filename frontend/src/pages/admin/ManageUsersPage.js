import React from 'react';
import UserTable from '../../components/admin/UserTable';
import { Form, FormControl} from 'react-bootstrap';

const ManageUsersPage = () => {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Kelola Akses Pengguna</h2>
        <button className="btn btn-lg btn-primary py-3 px-4">+ Tambah Akses</button>
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
    </div>
  );
};

export default ManageUsersPage;
