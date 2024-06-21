import React from 'react';

import service1 from '../../assets/service/service-1.png';
import service2 from '../../assets/service/service-2.png';
import service3 from '../../assets/service/service-3.png';
import service4 from '../../assets/service/service-4.png';
import service5 from '../../assets/service/service-5.png';

const Step3 = ({ formData, nextStep, prevStep }) => {

    const serviceImages = {
        'Laundry Kiloan': service1,
        'Laundry Satuan': service2,
        'Cuci Karpet': service3,
        'Laundry Sepatu': service4,
        'Laundry Perlengkapan Bayi': service5,
    };

    const sendMessage = () => {
    const waNumber = '6282133987199';
    const message = `
KONFIRMASI PESANAN:

Nama: ${formData.name}
Nomor: ${formData.phone}
Alamat: ${formData.address}
Catatan: ${formData.notes}
Pesanan:
${formData.services.map((service) => `- ${service}`).join('\n')}
    `;
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

    return (
        <div>
        <h3>Konfirmasi Pesanan</h3>
        <h4 className='fw-regular ms-sm-3 mt-3 mt-sm-0'>Pesanan :</h4>
        <div className='d-flex flex-wrap px-4 '>
            {formData.services.map((service, index) => (
            <div key={index} className='p-2 me-3 mt-2 mt-sm-0 mb-2 border border-primary rounded d-flex align-items-center'>
                <img src={serviceImages[service]} class="me-2" alt="" style={{width:'35px'}}/>
                <h5 className='mb-0'>{service}</h5>
            </div>
            ))}
        </div>
        
        <h4 className='fw-regular ms-sm-3 mt-4'>Data Diri :</h4>
        <form className="row g-3 px-sm-4">
            <div className="col-md-6">
            <label htmlFor="nameOrder" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control input-wizard readonly" id="nameOrder" value={formData.name} readOnly />
            </div>
            <div className="col-md-6">
            <label htmlFor="telpOrder" className="form-label">Nomor WA <i className="bi-whatsapp"></i></label>
            <input type="text" className="form-control input-wizard readonly" id="telpOrder" value={formData.phone} readOnly />
            </div>
            <div className="col-md-6">
            <label htmlFor="addressOrder" className="form-label">Alamat Lengkap</label>
            <textarea className="form-control input-wizard readonly" id="addressOrder" value={formData.address} readOnly rows="3"></textarea>
            </div>
            <div className="col-md-6">
            <label htmlFor="notesOrder" className="form-label">Catatan</label>
            <textarea className="form-control input-wizard readonly" id="notesOrder" value={formData.notes} readOnly rows="3"></textarea>
            </div>
        </form>
        <div className='w-100 d-flex justify-content-end mt-3 pe-sm-4'>
            <button onClick={prevStep} className='btn px-4 me-3 rounded btn-warning'>Back</button>
            <button onClick={sendMessage} className='btn px-4 rounded btn-success'><i className="bi-whatsapp"></i> Konfirmasi</button>
        </div>
        </div>
    );
};

export default Step3;