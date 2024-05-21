import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faShirt, faRug, faBabyCarriage, faSocks } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'Kiloan', icon: faScaleBalanced },
  { name: 'Satuan', icon: faShirt },
  { name: 'Karpet', icon: faRug },
  { name: 'Sepatu', icon: faSocks },
  { name: 'Stroller', icon: faBabyCarriage },
];

const dummyItemss = {
  Kiloan: ['Hot Item 1', 'Hot Item 2', 'Hot Item 3', 'Hot Item 1'],
  Satuan: ['Burger 1', 'Burger 2', 'Burger 3'],
  Karpet: ['Pizza 1', 'Pizza 2', 'Pizza 3'],
  Sepatu: ['Snack 1', 'Snack 2', 'Snack 3'],
  'Soft Drink': ['Soft Drink 1', 'Soft Drink 2', 'Soft Drink 3'],
  Stroller: ['Coffee 1', 'Coffee 2', 'Coffee 3'],
  'Ice Cream': ['Ice Cream 1', 'Ice Cream 2', 'Ice Cream 3'],
};

const dummyItems = {
  Kiloan: [
    { name: 'FULL', price:"35.000", unit: 'kg' },
    { name: 'CKO', price: "15.000", unit: 'kg' },
    { name: 'CKL', price: "20.000", unit: 'kg' },
    { name: 'CKS', price: "25.000", unit: 'kg' }
  ],
  Satuan: [
    { name: 'Jas', price: "50.000", unit: 'pcs' },
    { name: 'Kemeja', price: "20.000", unit: 'pcs' },
    { name: 'Sprei', price: "10.000", unit: 'pcs' },
    { name: 'Gaun', price: "70.000", unit: 'pcs' }
  ],
  Karpet: [
    { name: 'K-rumah', price: "25.000", unit: 'm2' },
    { name: 'K-masjid', price: "17.500", unit: 'm2' },
    { name: 'G-tebal', price: "12.500", unit: 'm2' },
    { name: 'G-tipis', price: "7.500", unit: 'm2' }
  ],
  Sepatu: [
    { name: 'Sneaker', price: "55.000", unit: 'pcs' },
    { name: 'Canvas', price: "60.000", unit: 'pcs' },
    { name: 'Suedee', price: "65.000", unit: 'pcs' },
    { name: 'Leather', price: "75.000", unit: 'pcs' }
  ],
  Stroller: [
    { name: 'Small', price: "200.000", unit: 'unit' },
    { name: 'Medium', price: "250.000", unit: 'unit' },
    { name: 'Large', price: "300.000", unit: 'unit' },
    { name: 'Twins', price: "350.000", unit: 'unit' }
  ],
};

const OrderPage = () => {

  const [activeCategory, setActiveCategory] = useState('Kiloan');
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (name, amount) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[name] || 0) + amount;
      return {
        ...prevQuantities,
        [name]: newQuantity < 0 ? 0 : newQuantity
      };
    });
  };

  return (
    <div className='container-fluid order-page-con'>
        <Row className='h-100'>
          <div className='p-4 col-9'>
            <h2>Buat <span className='fw-light'>Pesanan</span></h2>
            <div className=" mx-2 d-flex justify-content-between">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`card text-center icon-box-con p-2 ${activeCategory === category.name ? 'active border-light bg-warning' : 'border-light'}`}
                  onClick={() => setActiveCategory(category.name)}
                  style={{ cursor: 'pointer', width: '15%'}}
                >
                  <div className="icon-box d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={category.icon} style={{fontSize:"2vw"}} className='menu-icon'/>
                  </div>
                    <p className="card-text mt-2">{category.name}</p>
                </div>
              ))}
            </div>
            <h3 className='my-3'>Item</h3>
            <div className="mx-2 d-flex flex-wrap justify-content-between align-items-center">
              {dummyItems[activeCategory].map((item, index) => (
                <div key={index} className="card my-2" style={{ width: '23%' }}>
                  <div className="card-body">
                    <div style={{aspectRatio:"1"}} className='bg-light rounded d-flex justify-content-center align-items-center'>
                      <h3 className="card-title m-0 text-secondary">{item.name}</h3>
                    </div>
                    <p className="card-text text-center mt-2 mb-3">Rp.{item.price} / {item.unit}</p>
                    {/* {item.unit === 'pcs' ? (
                      <button className="w-100 btn btn-primary">Add</button>
                    ) : (
                      <div className="w-100 input-group quantity-input-group">
                        <button className="btn btn-primary" onClick={() => handleQuantityChange(item.name, -1)}>-</button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={quantities[item.name] || 0}
                          readOnly
                        />
                        <button className="btn btn-primary" onClick={() => handleQuantityChange(item.name, 1)}>+</button>
                      </div>
                    )} */}
                    <div className="w-100 input-group quantity-input-group">
                        <button className="btn btn-primary" onClick={() => handleQuantityChange(item.name, -1)}>-</button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={quantities[item.name] || 0}
                          readOnly
                        />
                        <button className="btn btn-primary" onClick={() => handleQuantityChange(item.name, 1)}>+</button>
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

              <div className='bill-item mb-3 d-flex'>
                <div className='item-thumb me-2 bg-light rounded'>
                    <h5 className='m-0 text-secondary'>KIL</h5>
                </div>
                <div className='item-detail'>
                    <h6 className='m-0 w-100 text-truncate'>Cuci Kering Strika</h6>
                    <span>Rp.50.000</span>
                </div>
                <div className='item-qty ms-auto ps-2 pe-3'>
                  <h6>2kg</h6>
                </div>
              </div>

              <div className='bill-item mb-3 d-flex'>
                <div className='item-thumb me-2 bg-light rounded'>
                    <h5 className='m-0 text-secondary'>STN</h5>
                </div>
                <div className='item-detail'>
                    <h6 className='m-0 w-100 text-truncate'>Kemeja</h6>
                    <span>Rp.60.000</span>
                </div>
                <div className='item-qty ms-auto ps-2 pe-3'>
                  <h6>3pcs</h6>
                </div>
              </div>
              
              <div className='bill-item mb-3 d-flex'>
                <div className='item-thumb me-2 bg-light rounded'>
                    <h5 className='m-0 text-secondary'>SPT</h5>
                </div>
                <div className='item-detail'>
                    <h6 className='m-0 w-100 text-truncate'>Sepatu Canvas</h6>
                    <span>Rp.300.000</span>
                </div>
                <div className='item-qty ms-auto ps-2 pe-3'>
                  <h6>5pcs</h6>
                </div>
              </div>
              
            </div>
            <div className='bill-footer pt-2 pe-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-normal'>Total : </h5>
                <h5>Rp.410.000</h5>
              </div>
              <button className="w-100 btn btn-primary">Buat Pesanan</button>
            </div>
          </div>
        </Row>
    </div>
  );
};

export default OrderPage;
