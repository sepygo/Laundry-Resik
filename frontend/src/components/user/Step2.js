import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Data Diri Anda</h3>
      <form className="row g-3 px-sm-4">
        <div className="col-md-6">
          <label htmlFor="nameOrder" className="form-label">Nama Lengkap</label>
          <input
            type="text"
            className="form-control input-wizard"
            id="nameOrder"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Masukan Nama Anda'
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="telpOrder" className="form-label">Nomor WA <i className="bi-whatsapp"></i></label>
          <input
            type="text"
            className="form-control input-wizard"
            id="telpOrder"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Masukan Nomor Whastapp Anda'
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="addressOrder" className="form-label">Alamat Lengkap</label>
          <textarea
            className="form-control input-wizard"
            id="addressOrder"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            placeholder='Masukan Alamat Lengkap Anda'
          ></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="notesOrder" className="form-label">Catatan</label>
          <textarea
            className="form-control input-wizard"
            id="notesOrder"
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            placeholder='Tambahkan Catatan Jika Ada'
          ></textarea>
        </div>
      </form>
      <div className='w-100 d-flex justify-content-end mt-3 pe-sm-4'>
        <button onClick={prevStep} className='btn px-4 me-3 rounded btn-warning'>Back</button>
        <button onClick={nextStep} className='btn px-4 rounded btn-primary'>Next</button>
      </div>
    </div>
  );
};

export default Step2;
