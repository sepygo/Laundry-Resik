import React from 'react';
import service1 from '../../assets/service/service-1.png'
import service2 from '../../assets/service/service-2.png'
import service3 from '../../assets/service/service-3.png'
import service4 from '../../assets/service/service-4.png'
import service5 from '../../assets/service/service-5.png'

const OrderPage = () => {
  return (
    <div>
        <section class="py-4 bg-white order-hero">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="fw-bold text-center">Pilih Jenis Layanan</h2>
                    <div class="w-100 d-flex flex-wrap justify-content-center align-items-center">
                        <div class="card card-service" onclick="location.href = 'form-order.html';">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={service1} class="card-img-service" alt=""/>
                            </div>
                            <div class="card-body">
                                <h5 class="fw-bold text-center">Laundry Kiloan</h5>
                                <p class="card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                                    sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
                            </div>
                        </div>
                        <div class="card card-service" onclick="location.href = 'form-order.html';">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={service2} class="card-img-service" alt=""/>
                            </div>
                            <div class="card-body">
                                <h5 class="fw-bold text-center">Laundry Satuan</h5>
                                <p class="card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                                    sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
                            </div>
                        </div>
                        <div class="card card-service" onclick="location.href = 'form-order.html';">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={service3} class="card-img-service" alt=""/>
                            </div>
                            <div class="card-body">
                                <h5 class="fw-bold text-center">Cuci Karpet</h5>
                                <p class="card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                                    sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
                            </div>
                        </div>
                        <div class="card card-service" onclick="location.href = 'form-order.html';">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={service4} class="card-img-service" alt=""/>
                            </div>
                            <div class="card-body">
                                <h5 class="fw-bold text-center">Laundry Sepatu</h5>
                                <p class="card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                                    sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
                            </div>
                        </div>
                        <div class="card card-service" onclick="location.href = 'form-order.html';">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={service5} class="card-img-service" alt=""/>
                            </div>
                            <div class="card-body">
                                <h5 class="fw-bold text-center">Cuci Perlengkapan Bayi</h5>
                                <p class="card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                                    sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default OrderPage;
