import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { useParams } from 'react-router-dom';

const TrackResultPage = () => {

  const { tc } = useParams(); // Mendapatkan tracking code dari parameter URL
  const [order, setOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/orders/tracking/${tc}`);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/order-items`);
      setOrderDetails(response.data);
    } catch (error) {
      console.error('Error fetching order items:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/services`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchOrder();
    fetchOrderItems();
    fetchServices();
  }, [tc]);

  const selectedOrderItems = orderDetails.filter(item => item.order_id === order?.id);

  let statusNow = 1;
  if (order) {
    switch (order.status) {
      case 'Proses':
        statusNow = 2;
        break;
      case 'Siap Ambil':
        statusNow = 3;
        break;
      case 'Selesai':
        statusNow = 4;
        break;
      default:
        statusNow = 0;
    }
  }

  const formatRupiah = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const sendMessage = () => {
    const waNumber = '6282133987199';
    const message = `
    🔍BUTUH BANTUAN🔎
    
Halo Admin 👋,
    
Saya ingin menanyakan status pesanan saya dengan kode tracking: *${tc}*.

Mohon informasinya mengenai status pesanan tersebut.

Terima kasih 🙏
    `;
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const helpMessage = () => {
    const waNumber = '6282133987199';
    const message = `
    ‼️KODE TRACKING TIDAK DITEMUKAN‼️

Halo Admin 👋,
    
Saya ingin menanyakan tentang kode tracking *${tc}* yang *Tidak Ditemukan*.

Mohon bantuannya untuk mengecek dan memberikan informasi lebih lanjut.

Terima kasih 🙏
    `;
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-5 bg-white form-hero track-result">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-5">Detail Pesanan</h2>
          </div>
        </div>

        {loading ? (
          <div className='row justify-content-center'>
            <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height:"50vh"}}>
              <h2 className='text-center'>Memuat.....</h2>
            </div>
          </div>
        ) : order ? (
          <div className="row justify-content-center">
            <div className='step-navigation col-3 pt-0'>
              <div className='step-con d-flex flex-column align-items-center'>
                <div className='d-flex align-items-center'>
                    <div className='step-item completed'>
                        <i className='step-icon bi-send-check'></i>
                    </div>
                    <h5 className='ms-5 mb-0' style={{position:'absolute'}}>Verifikasi</h5>
                </div>
                <div className={`vertical-lines ${statusNow > 1 ? 'active' : ''}`}></div>
                <div className='d-flex align-items-center'>
                    <div className={`step-item ${statusNow > 1 ? 'completed' : ''}`}>
                        <i className='step-icon bi-hourglass-top'></i>
                    </div>
                    <h5 className='ms-5 mb-0' style={{position:'absolute'}}>Proses</h5>
                </div>
                <div className={`vertical-lines ${statusNow > 2 ? 'active' : ''}`}></div>
                <div className='d-flex align-items-center'>
                    <div className={`step-item ${statusNow > 2 ? 'completed' : ''}`}>
                        <i className='step-icon bi-box2-heart'></i>
                    </div>
                    <h5 className='ms-5 mb-0' style={{position:'absolute'}}>Siap Ambil</h5>
                </div>
                <div className={`vertical-lines ${statusNow > 3 ? 'active' : ''}`}></div>
                <div className='d-flex align-items-center'>
                    <div className={`step-item ${statusNow > 3 ? 'completed' : ''}`}>
                        <i className='step-icon bi-check2-circle'></i>
                    </div>
                    <h5 className='ms-5 mb-0' style={{position:'absolute'}}>Selesai</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-9">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Status</td>
                      <td className={
                        order.status === 'Verifikasi' ? 'text-danger' :
                        order.status === 'Proses' ? 'text-warning' :
                        order.status === 'Siap Ambil' ? 'text-primary' :
                        order.status === 'Selesai' ? 'text-success' :
                        ''
                      }>
                        {order.status}
                      </td>
                    </tr>
                    <tr>
                      <td>Nomor Pesanan</td>
                      <td>{order.tracking_code}</td>
                    </tr>
                    <tr>
                      <td>Nama</td>
                      <td>{order.customer_name}</td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td>{order.address}</td>
                    </tr>
                    <tr>
                      <td>Catatan</td>
                      <td>{order.notes}</td>
                    </tr>
                    <tr>
                      <td>Layanan</td>
                      <td>
                        {selectedOrderItems.length === 0 ? (
                            <h5 className="m-0 text-warning text-end">Dalam Proses Verifikasi</h5>
                        ) : (
                          selectedOrderItems.map(item => {
                            const service = services.find(s => s.id === item.service_id);
                            return (
                              <div key={item.id} className='pe-2 mb-1 border rounded d-flex justify-content-between align-items-center' style={{overflow:'hidden', minWidth:'360px'}}>
                                <div className='d-flex justify-content-center align-items-center'>
                                  <div className='me-2 bg-light d-flex justify-content-center align-items-center' style={{aspectRatio:'1/1',height:'56px'}}>
                                    <h6 className='m-0' style={{fontSize:'0.9em'}}>{service?.name}</h6>
                                  </div>
                                  <div>
                                    <h5 className="mb-1" style={{fontSize:'16px'}}>{service?.description}</h5>
                                    <h5 className='m-0' style={{fontSize:'14px'}}>
                                      <span style={{fontSize:'10px'}}>Rp</span>.{formatRupiah(parseInt(service?.price))} x {item.quantity}
                                      {service?.unit === 'm2' ? (
                                        <span>m<sup>2</sup></span>
                                      ) : (
                                        service?.unit
                                      )}
                                    </h5>
                                  </div>
                                </div>
                                <div>
                                  <h5 className='m-0'><span style={{fontSize:'14px'}}>Rp</span>{formatRupiah(parseInt(item.price))}</h5>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </td>

                    </tr>
                    <tr>
                        <td className='fw-bold' >Total Biaya</td>
                        <td className='fw-bold text-end'>
                          {selectedOrderItems.length === 0 ? (
                              <h5 className="m-0 text-warning">Dalam Proses Verifikasi</h5>
                          ) : ( 
                              <h5 className='m-0'>
                                <span style={{fontSize:'14px'}}>Rp</span>.{formatRupiah(parseInt(order.total_price))}
                              </h5>
                          )}
                        </td>
                    </tr>
                  </tbody>
                </table>
              <div className='w-100 d-flex justify-content-end'>
                <button onClick={sendMessage} className='btn px-4 rounded btn-success'><i className="bi-whatsapp"></i> Tanya Kami</button>
              </div>
            </div>
          </div>
        ):(
          <div className='row justify-content-center'>
            <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height:"50vh"}}>
              <h2 className='text-center'>Pesanan tidak ditemukan</h2>
                <button onClick={helpMessage} className='btn px-4 rounded btn-success' style={{width:'fit-content'}}><i className="bi-whatsapp"></i> Hubungi Kami</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TrackResultPage;
