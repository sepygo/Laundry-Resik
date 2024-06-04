import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
        <h3>Data Diri Anda</h3>
        <form class="row g-3 px-4">
            <div class="col-md-6">
                <label for="nameOrder" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control input-wizard" id="nameOrder" placeholder='Masukan Nama Anda'/>
            </div>
            <div class="col-md-6">
                <label for="telpOrder" class="form-label">Nomor WA <i class="bi-whatsapp"></i></label>
                <input type="text" class="form-control input-wizard" id="telpOrder"  placeholder='Masukan Nomor Whastapp Anda'/>
            </div>
            <div class="col-md-6">
                <label for="addressOrder" class="form-label">Alamat Lengkap</label>
                <textarea class="form-control input-wizard" id="addressOrder" rows="3" placeholder='Masukan Alamat Lengkap Anda'></textarea>
            </div>
            <div class="col-md-6">
                <label for="notesOrder" class="form-label">Catatan</label>
                <textarea class="form-control input-wizard" id="notesOrder" rows="3" placeholder='Tambahkan Catatan Jika Ada'></textarea>
            </div>
        </form>
        <div className='w-100 d-flex justify-content-end mt-3 pe-4'>
            <button onClick={prevStep} className='btn px-4 me-3 rounded btn-warning'>Back</button>
            <button onClick={nextStep} className='btn px-4 rounded btn-primary'>Next</button>
        </div>
    </div>
  );
};

export default Step2;