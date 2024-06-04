import React from 'react';
import service1 from '../../assets/service/service-1.png';
import service2 from '../../assets/service/service-2.png';
import service3 from '../../assets/service/service-3.png';
import service4 from '../../assets/service/service-4.png';
import service5 from '../../assets/service/service-5.png';

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
        <h3>Pilih Jenis Layanan</h3>
        <div className='px-4 py-1'>
            <div class="px-3 my-3 form-check border rounded d-flex align-items-center justify-content-between">
                <label class="py-2 form-check-label" for="checkService1">
                    <div className='d-flex align-items-center'>
                        <img src={service1} class="card-img-service-order me-3" alt=""/>
                        <h5 className='mb-0 fw-bold'>Laundry Kiloan</h5>
                    </div>
                </label>
                <input class="form-check-input" type="checkbox" value="" id="checkService1" />
            </div>
            <div class="px-3 my-3 form-check border rounded d-flex align-items-center justify-content-between">
                <label class="py-2 form-check-label" for="checkService2">
                    <div className='d-flex align-items-center'>
                        <img src={service2} class="card-img-service-order me-3" alt=""/>
                        <h5 className='mb-0 fw-bold'>Laundry Satuan</h5>
                    </div>
                </label>
                <input class="form-check-input" type="checkbox" value="" id="checkService2" />
            </div>
            <div class="px-3 my-3 form-check border rounded d-flex align-items-center justify-content-between">
                <label class="py-2 form-check-label" for="checkService3">
                    <div className='d-flex align-items-center'>
                        <img src={service3} class="card-img-service-order me-3" alt=""/>
                        <h5 className='mb-0 fw-bold'>Cuci Karpet</h5>
                    </div>
                </label>
                <input class="form-check-input" type="checkbox" value="" id="checkService3" />
            </div>
            <div class="px-3 my-3 form-check border rounded d-flex align-items-center justify-content-between">
                <label class="py-2 form-check-label" for="checkService4">
                    <div className='d-flex align-items-center'>
                        <img src={service4} class="card-img-service-order me-3" alt=""/>
                        <h5 className='mb-0 fw-bold'>Laundry Sepatu</h5>
                    </div>
                </label>
                <input class="form-check-input" type="checkbox" value="" id="checkService4" />
            </div>
            <div class="px-3 my-3 form-check border rounded d-flex align-items-center justify-content-between">
                <label class="py-2 form-check-label" for="checkService5">
                    <div className='d-flex align-items-center'>
                        <img src={service5} class="card-img-service-order me-3" alt=""/>
                        <h5 className='mb-0 fw-bold'>Laundry Perlengkapan Bayi</h5>
                    </div>
                </label>
                <input class="form-check-input" type="checkbox" value="" id="checkService5" />
            </div>
        </div>
        <div className='w-100 d-flex justify-content-end mt-3 pe-4'>
            <button onClick={nextStep} className='btn px-4 rounded btn-primary'>Next</button>
        </div>
    </div>
  );
};

export default Step1;