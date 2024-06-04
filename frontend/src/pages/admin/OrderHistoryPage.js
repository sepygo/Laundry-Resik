import React, { useState } from 'react';
import { Form, FormControl, Button, Table} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const OrderHistoryPage = () => {

  // canvas 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <th className='bg-primary text-white'>Status</th>
            <th className='bg-primary text-white'>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>12310</td>
            <td>10/10/2024</td>
            <td>John Doe</td>
            <td>Jl. Mohamad Toha No.57 Kota Medan</td>
            <td>Verifikasi</td>
            <td className='text-center'>
              <Button className="btn btn-sm btn-primary me-2" onClick={handleShow}><FontAwesomeIcon icon={faCircleInfo} className='mx-2'/></Button>
            </td>
          </tr>
          <tr>
            <td className='text-center'>12310</td>
            <td>10/10/2024</td>
            <td>Brie willis</td>
            <td>Jl. Sulfat G-12 Kota Medan</td>
            <td>Proses</td>
            <td className='text-center'>
              <Button className="btn btn-sm btn-primary me-2" onClick={handleShow}><FontAwesomeIcon icon={faCircleInfo} className='mx-2'/></Button>
            </td>
          </tr>
          <tr>
            <td className='text-center'>12310</td>
            <td>10/10/2024</td>
            <td>Adi Candra</td>
            <td>Jl. Ikhsan Kasim no.68 Kota Medan</td>
            <td>Selesai</td>
            <td className='text-center'>
              <Button className="btn btn-sm btn-primary me-2" onClick={handleShow}><FontAwesomeIcon icon={faCircleInfo} className='mx-2'/></Button>
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

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Detail Pesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Status</td>
                  <td className='text-success fw-bold'>Selesai</td>
                </tr>
                <tr>
                  <td>Nomor Pesanan</td>
                  <td>54321</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td>Harper Downey</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Jl. Mohamad Toha No.57 Kota Bandung, Jawa Barat</td>
                </tr>
                <tr>
                  <td>Layanan</td>
                  <td>Cuci Sepatu</td>
                </tr>
                <tr>
                    <td rowSpan={2}>Item</td>
                    <td>3pcs - Sepatu Suede</td>
                </tr>
                <tr>
                    <td>1pcs - Sepatu Sneaker</td>
                </tr>
                <tr>
                    <td className='fw-bold'>Total Biaya</td>
                    <td className='fw-bold'>Rp.250.000</td>
                </tr>
              </tbody>
            </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderHistoryPage;
