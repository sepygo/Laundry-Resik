import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faShirt, faRug, faBabyCarriage, faSocks } from '@fortawesome/free-solid-svg-icons';

const OrderPage = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [quantities, setQuantities] = useState({});
  const [show, setShow] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: '',
    telp: '',
    address: '',
    notes: ''
  });
  const [isCustomerSelected, setIsCustomerSelected] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/categories`);
        setCategories(response.data);
        setActiveCategory(response.data[0].name);
      } catch (error) {
        console.error('Error fetching categories:', error);
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

    fetchCategories();
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/orders`);
        const verifiedCustomers = response.data.filter(customer => customer.status === 'Verifikasi');
        setCustomers(verifiedCustomers);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleQuantityChange = (name, amount) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[name] || 0) + amount;
      return {
        ...prevQuantities,
        [name]: newQuantity < 0 ? 0 : newQuantity
      };
    });
  };

  const handleClose = () => {
    setShow(false);
    setSelectedCustomer({
      username: '',
      email: '',
      password: '',
      role: '',
    });
  };
  const handleShow = () => setShow(true);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Kiloan':
        return faScaleBalanced;
      case 'Satuan':
        return faShirt;
      case 'Karpet':
        return faRug;
      case 'Sepatu':
        return faSocks;
      case 'Stroller':
        return faBabyCarriage;
      default:
        return faScaleBalanced;
    }
  };

  const filteredServices = services.filter(service => service.category_id === categories.find(cat => cat.name === activeCategory)?.id);

  const handleCustomerSelect = (customerId) => {
    const customerIds = parseInt(customerId);
    const selected = customers.find(customer => customer.id === customerIds);
    setSelectedCustomer({
      name: selected.customer_name,
      telp: selected.telp,
      address: selected.address,
      notes: selected.notes
    });
    setIsCustomerSelected(true);
    setSelectedCustomerId(customerId);
  };

  const resetQuantities = () => {
    setQuantities({});
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    const orderItems = Object.keys(quantities).map(serviceName => {
      const service = services.find(service => service.name === serviceName);
      return {
        service_id: service.id,
        quantity: quantities[serviceName],
        price: service.price
      };
    });

    const order = {
      order_date: new Date().toISOString().split('T')[0],
      status: 'Proses',
      total_price: orderItems.reduce((total, item) => total + (item.quantity * item.price), 0),
      customer_name: selectedCustomer.name,
      telp: selectedCustomer.telp,
      address: selectedCustomer.address,
      notes: selectedCustomer.notes,
      order_items: orderItems
    };

    try {
      if (isCustomerSelected && selectedCustomerId) {
        // Delete existing order before creating a new one
        await axios.delete(`${API_URL}/api/orders/${selectedCustomerId}`);
        console.log('Order deleted successfully');
      }

      // Create a new order
      const response = await axios.post(`${API_URL}/api/orders`, order);
      console.log('Order created successfully:', response.data);
      resetQuantities();
      handleClose();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className='container-fluid order-page-con'>
      <Row className='h-100'>
        <div className='p-4 col-9'>
          <h2>Buat <span className='fw-light'>Pesanan</span></h2>
          <div className="mx-2 d-flex justify-content-between">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`card text-center icon-box-con p-2 ${activeCategory === category.name ? 'active border-light bg-warning' : 'border-light'}`}
                onClick={() => setActiveCategory(category.name)}
                style={{ cursor: 'pointer', width: '15%'}}
              >
                <div className="icon-box d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={getCategoryIcon(category.name)} style={{fontSize:"2vw"}} className='menu-icon'/>
                </div>
                <p className="card-text mt-2">{category.name}</p>
              </div>
            ))}
          </div>
          <h3 className='my-3'>Item</h3>
          <div className="mx-2 d-flex flex-wrap justify-content-between align-items-center">
            {filteredServices.map((item, index) => (
              <div key={index} className="card my-2" style={{ width: '21%' }}>
                <div className="card-body">
                  <div style={{aspectRatio:"1"}} className='bg-light rounded d-flex justify-content-center align-items-center'>
                    <h3 className="card-title m-0 text-secondary">{item.name}</h3>
                  </div>
                  <p className="card-text text-center mt-2 mb-3">Rp.{item.price} / {item.unit === 'm2' ? 'm²' : item.unit}</p>
                  <div className="w-100 input-group quantity-input-group">
                    <button className="btn btn-sm btn-primary" onClick={() => handleQuantityChange(item.name, -1)}>-</button>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={quantities[item.name] || 0}
                      readOnly
                    />
                    <button className="btn btn-sm btn-primary" onClick={() => handleQuantityChange(item.name, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='py-4 ps-3 pe-0 col-3 bill-con border-start bg-white'>
          <div className='bill-header'>
            <h3>Nota</h3>
          </div>
          <div className='bill-list'>
            {Object.keys(quantities).map(key => quantities[key] > 0 && (
              <div key={key} className='bill-item mb-3 d-flex'>
                <div className='item-thumb me-2 bg-light rounded'>
                  <h5 className='m-0 text-secondary'>{key}</h5>
                </div>
                <div className='item-detail'>
                  <h6 className='m-0 w-100 text-truncate'>{key}</h6>
                  <span>Rp.{services.find(service => service.name === key)?.price}</span>
                </div>
                <div className='item-qty ms-auto ps-2 pe-3'>
                  <h6>
                    {quantities[key]}
                    {services.find(service => service.name === key)?.unit === 'm2' ? (
                        <span>m<sup>2</sup></span>
                    ) : (
                        services.find(service => service.name === key)?.unit
                    )}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className='bill-footer pt-2 pe-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='fw-normal'>Total : </h5>
              <h5>Rp.{Object.keys(quantities).reduce((total, key) => total + (quantities[key] * services.find(service => service.name === key)?.price), 0)}</h5>
            </div>
            <Button className="w-100 btn btn-warning" onClick={handleShow}>Buat Pesanan</Button>
          </div>
        </div>
      </Row>

      <Offcanvas className='offcanvas-order' show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detail Pemesan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='container'>
            <Row>
              <div className="col-md-4">
                <label htmlFor="searchCustOrder" className="form-label">Cari Pemesan (opsional)</label>
                <select
                  className="form-select"
                  id="searchCustOrder"
                  aria-label="Default select example"
                  onChange={(e) => handleCustomerSelect(e.target.value)}
                >
                  <option selected disabled>Cari Nama Pemesan</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>{customer.customer_name}</option>
                  ))}
                </select>
              </div>
              <form className="row h-100 g-3 px-4" onSubmit={handleOrderSubmit}>
                <div className="col-md-6">
                  <label htmlFor="nameOrder" className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control input-wizard"
                    id="nameOrder"
                    value={selectedCustomer.name}
                    readOnly={isCustomerSelected}
                    onChange={(e) => {
                      setSelectedCustomer(prev => ({ ...prev, name: e.target.value }));
                      setIsCustomerSelected(false);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="telpOrder" className="form-label">Nomor WA <i className="bi-whatsapp"></i></label>
                  <input
                    type="text"
                    className="form-control input-wizard"
                    id="telpOrder"
                    value={selectedCustomer.telp}
                    readOnly={isCustomerSelected}
                    onChange={(e) => {
                      setSelectedCustomer(prev => ({ ...prev, telp: e.target.value }));
                      setIsCustomerSelected(false);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="addressOrder" className="form-label">Alamat Lengkap</label>
                  <textarea
                    className="form-control input-wizard"
                    id="addressOrder"
                    rows="3"
                    value={selectedCustomer.address}
                    readOnly={isCustomerSelected}
                    onChange={(e) => {
                      setSelectedCustomer(prev => ({ ...prev, address: e.target.value }));
                      setIsCustomerSelected(false);
                    }}
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="notesOrder" className="form-label">Catatan</label>
                  <textarea
                    className="form-control input-wizard"
                    id="notesOrder"
                    rows="3"
                    value={selectedCustomer.notes}
                    readOnly={isCustomerSelected}
                    onChange={(e) => {
                      setSelectedCustomer(prev => ({ ...prev, notes: e.target.value }));
                      setIsCustomerSelected(false);
                    }}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn w-100 btn-success" type="submit">Buat Pesanan</button>
                </div>
              </form>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OrderPage;
