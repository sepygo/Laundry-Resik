import React, { useState, useEffect } from 'react';
import { Form, FormControl, Table, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function formatRupiah(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const TrackingCodePage = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [show, setShow] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/orders');
      setOrders(response.data);
      filterOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchOrderItems = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/order-items');
      setOrderDetails(response.data);
    } catch (error) {
      console.error('Error fetching order items:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchOrderItems();
    fetchServices();
  }, []);

  const filterOrders = (allOrders) => {
    const filtered = allOrders.filter(order => order.status !== 'Selesai');
    setFilteredOrders(filtered);
  };

  const handleClose = () => setShow(false);
  const handleShow = (orderId) => {
    setSelectedOrderId(orderId);
    setShow(true);
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3100/api/orders/${orderId}`);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:3100/api/orders/status/${orderId}`, { status: newStatus });
      setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const selectedOrderItems = orderDetails.filter(item => item.order_id === selectedOrderId);

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Kelola Kode Tracking</h2>
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
            <th className='bg-primary text-white'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td className='text-center'>{order.tracking_code}</td>
              <td style={{minWidth:'100px'}}>{order.order_date}</td>
              <td>{order.customer_name}</td>
              <td>{order.address}</td>
              <td style={{minWidth:'137px'}}>
                <Form.Select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className={order.status === 'Verifikasi' ? 'text-danger' :
                              order.status === 'Proses' ? 'text-warning' :
                              order.status === 'Siap Ambil' ? 'text-primary' :
                              order.status === 'Selesai' ? 'text-success' : ''
                            }
                >
                  <option className='text-danger' value="Verifikasi">Verifikasi</option>
                  <option className='text-warning' value="Proses">Proses</option>
                  <option className='text-primary' value="Siap Ambil">Siap Ambil</option>
                  <option className='text-success' value="Selesai">Selesai</option>
                </Form.Select>
              </td>
              <td className='text-center' style={{minWidth:'129px'}}>
                <Button variant="primary" size="sm" className="me-2" onClick={() => handleShow(order.id)}>
                  <FontAwesomeIcon icon={faCircleInfo} className='mx-2' />
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteOrder(order.id)}>
                  <FontAwesomeIcon icon={faTrash} className='mx-2' />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>


      <Offcanvas show={show} onHide={handleClose} placement='end' style={{width:'30vw'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detail Pesanan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Status</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td className={orders.find(order => order.id === selectedOrderId)?.status === 'Verifikasi' ? 'text-danger' :
                                orders.find(order => order.id === selectedOrderId)?.status === 'Proses' ? 'text-warning' :
                                orders.find(order => order.id === selectedOrderId)?.status === 'Siap Ambil' ? 'text-primary' :
                                orders.find(order => order.id === selectedOrderId)?.status === 'Selesai' ? 'text-success' :
                              ''} style={{borderLeft:'none'}} >
                  {orders.find(order => order.id === selectedOrderId)?.status}
                </td>
              </tr>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Nomor Pesanan</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td style={{borderLeft:'none'}}>{orders.find(order => order.id === selectedOrderId)?.tracking_code}</td>
              </tr>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Nama</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td style={{borderLeft:'none'}}>{orders.find(order => order.id === selectedOrderId)?.customer_name}</td>
              </tr>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Nomor WA</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td style={{borderLeft:'none'}}>{orders.find(order => order.id === selectedOrderId)?.telp}</td>
              </tr>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Alamat</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td style={{borderLeft:'none'}}>{orders.find(order => order.id === selectedOrderId)?.address}</td>
              </tr>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Catatan</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td style={{borderLeft:'none'}}>{orders.find(order => order.id === selectedOrderId)?.notes}</td>
              </tr>
              <tr>
                <td style={{width:'150px',borderRight:'none'}}>Layanan</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td style={{borderLeft:'none'}}>
                  {selectedOrderItems.map(item => {
                    const service = services.find(s => s.id === item.service_id);
                    return (
                      // <div key={item.id}>
                      //   {item.quantity} {service ? service.unit : ''} - {service ? service.name : 'Unknown Service'}
                      // </div>
                      <div key={item.id} className='pe-2 mb-1 border rounded d-flex justify-content-between align-items-center' style={{overflow:'hidden'}}>
                        <div className=' d-flex justify-content-center align-items-center'>
                          <div className='me-2 bg-light d-flex justify-content-center align-items-center' style={{aspectRatio:'1/1',height:'56px'}}>
                            <h6 className='m-0' style={{fontSize:'0.9em'}}>{service.name}</h6>
                          </div>
                          <h5 className='m-0' style={{fontSize:'18px'}}>{item.quantity}
                            {service.unit === 'm2' ? (
                                <span>m<sup>2</sup></span>
                            ) : (
                                service.unit
                            )}
                          </h5>
                        </div>
                        <div>
                          <h5 className='m-0'><span style={{fontSize:'14px'}}>Rp</span>.{formatRupiah(item.price)}</h5>
                        </div>
                      </div>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td className='fw-bold' style={{width:'150px',borderRight:'none'}}>Total Biaya</td>
                <td className='text-center' style={{width:'20px',border:'none'}}>:</td>
                <td className='fw-bold text-end' style={{borderLeft:'none'}}>
                  <h5 className='m-0'>
                    <span style={{fontSize:'14px'}}>Rp</span>.{formatRupiah(parseInt(orders.find(order => order.id === selectedOrderId)?.total_price))}
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  );
};

export default TrackingCodePage;
