import React, { useState } from 'react';
import service1 from '../../assets/service/service-1.png';
import service2 from '../../assets/service/service-2.png';
import service3 from '../../assets/service/service-3.png';
import service4 from '../../assets/service/service-4.png';
import service5 from '../../assets/service/service-5.png';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { services } = formData;

    if (checked) {
      setFormData({
        ...formData,
        services: [...services, value],
      });
    } else {
      setFormData({
        ...formData,
        services: services.filter((service) => service !== value),
      });
    }
  };

  const handleNext = () => {
    if (formData.services.length === 0) {
      setError('Silahkan pilih Layanan yang akan anda pesan.');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div>
      <h3>Pilih Jenis Layanan</h3>
      <div className='px-0 px-sm-4 py-1'>
        {[{ id: 1, name: 'Laundry Kiloan', image: service1 },
          { id: 2, name: 'Laundry Satuan', image: service2 },
          { id: 3, name: 'Cuci Karpet', image: service3 },
          { id: 4, name: 'Laundry Sepatu', image: service4 },
          { id: 5, name: 'Laundry Perlengkapan Bayi', image: service5 }].map(service => (
            <div key={service.id} className="px-3 my-3 form-check border rounded d-flex align-items-center justify-content-between">
              <label className="py-2 form-check-label" htmlFor={`checkService${service.id}`}>
                <div className='d-flex align-items-center'>
                  <img src={service.image} className="card-img-service-order me-3" alt="" />
                  <h5 className='mb-0 fw-bold'>{service.name}</h5>
                </div>
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value={service.name}
                id={`checkService${service.id}`}
                checked={formData.services.includes(service.name)}
                onChange={handleChange}
              />
            </div>
          ))}
      </div>
      {/* {error ? <h5 className="text-danger mb-0">{error}</h5> : <h5 className="mb-0">  </h5>} */}
      <div className='w-100 d-flex justify-content-between mt-3 pe-sm-4'>
        <h5 className="text-danger mb-0" style={{ opacity: error ? '1' : '0' }}>Silahkan pilih Layanan yang akan anda pesan.</h5>
        <button onClick={handleNext} className='btn px-4 rounded btn-primary'>Next</button>
      </div>
    </div>
  );
};

export default Step1;
