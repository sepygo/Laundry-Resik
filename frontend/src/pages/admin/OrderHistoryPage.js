import React from 'react';
import { Form, FormControl} from 'react-bootstrap';

import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const OrderHistoryPage = () => {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Daftar Riwayat Pemesanan</h2>
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
      <Table bordered hover>
        <thead>
          <tr className='text-center'>
            <th className='bg-primary text-white'>Kode</th>
            <th className='bg-primary text-white'>Tanggal</th>
            <th className='bg-primary text-white'>Nama Pemesan</th>
            <th className='bg-primary text-white'>Alamat</th>
            <th className='bg-primary text-white'>Layanan</th>
            <th className='bg-primary text-white'>Status</th>
            <th className='bg-primary text-white'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>12310</td>
            <td>10/10/2024</td>
            <td>John Doe</td>
            <td>Jl. Mohamad Toha No.57 Kota Bandung, Jawa Barat</td>
            <td>Cuci Karpet</td>
            <td>Verifikasi</td>
            <td className='text-center'>
              <Button variant="primary" size="sm" className="me-2"><FontAwesomeIcon icon={faPen} className='mx-2'/></Button>
              <Button variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} className='mx-2'/></Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderHistoryPage;
