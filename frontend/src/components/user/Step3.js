import React from 'react';
import service1 from '../../assets/service/service-1.png';
import service4 from '../../assets/service/service-4.png';

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
        <h3>Konfirmasi Pesanan</h3>
        <h4 className='fw-regular ms-sm-3 mt-3 mt-sm-0'>Pesanan :</h4>
        <div className='d-flex flex-wrap px-4 '>
            <div className='p-2 me-3 mt-2 mt-sm-0 border border-primary rounded d-flex align-items-center'>
                <img src={service1} class="me-2" alt="" style={{width:'35px'}}/>
                <h5 className='mb-0'>Laundry Kiloan</h5>
            </div>
            <div className='p-2 me-3 mt-2 mt-sm-0 border border-primary rounded d-flex align-items-center'>
                <img src={service4} class="me-2" alt="" style={{width:'35px'}}/>
                <h5 className='mb-0'>Laundry Sepatu</h5>
            </div>
        </div>
        
        <h4 className='fw-regular ms-sm-3 mt-4'>Data Diri :</h4>
        <form class="row g-3 px-sm-4">
            <div class="col-md-6">
                <label for="nameOrder" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control input-wizard readonly" id="nameOrder" value="Dimas putra anhar" readOnly />
            </div>
            <div class="col-md-6">
                <label for="telpOrder" class="form-label">Nomor WA <i class="bi-whatsapp"></i></label>
                <input type="text" class="form-control input-wizard readonly" id="telpOrder" value="08213456789" readOnly />
            </div>
            <div class="col-md-6">
                <label for="addressOrder" class="form-label">Alamat Lengkap</label>
                <textarea class="form-control input-wizard readonly" id="addressOrder" value="Jl Sulfat" readOnly rows="3"></textarea>
            </div>
            <div class="col-md-6">
                <label for="notesOrder" class="form-label">Catatan</label>
                <textarea class="form-control input-wizard readonly" id="notesOrder" value="Batik Terpisah" readOnly rows="3"></textarea>
            </div>
        </form>
        <div className='w-100 d-flex justify-content-end mt-3 pe-sm-4'>
            <button onClick={prevStep} className='btn px-4 me-3 rounded btn-warning'>Back</button>
            <button onClick={nextStep} className='btn px-4 rounded btn-success'><i class="bi-whatsapp"></i> Konfirmasi</button>
        </div>
    </div>
  );
};

export default Step3;