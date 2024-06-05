import React from 'react';
import testi1 from '../../assets/testi/testi1.png'
import testi2 from '../../assets/testi/testi2.png'
import testi3 from '../../assets/testi/testi3.png'
import testi4 from '../../assets/testi/testi4.png'
import testi5 from '../../assets/testi/testi5.png'
import testi6 from '../../assets/testi/testi6.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons';

const TestiPage = () => {
  return (
    <div>
        <section className="py-80 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="fw-bold text-center">Testimoni Pelanggan</h2>
                        <p className="text-center">Dengarkan pendapat mereka mengenai layanan dari Laundry Resik</p>
                        <div className="w-100 d-flex flex-wrap justify-content-around align-items-center">
                            <div className="card card-testi">
                            <div className="card-body">
                                <h5 className="card-title text-muted"><FontAwesomeIcon icon={faQuoteRight}/></h5>
                                <p className="card-subtitle m-0 text-muted">
                                Mereka memberikan perhatian khusus pada detail pakaian saya. Saya merasa pakaian saya dalam keadaan terbaik.
                                </p>
                            </div>
                            <div className="card-name d-flex align-items-center">
                                <img src={testi1} alt="" />
                                <div className="ms-3">
                                <h5 className="fw-bold">Madam Indah</h5>
                                <span>Customer
                                </span></div>
                            </div>
                            </div>
                            <div className="card card-testi">
                            <div className="card-body">
                                <h5 className="card-title text-muted"><FontAwesomeIcon icon={faQuoteRight}/></h5>
                                <p className="card-subtitle m-0 text-muted">
                                Saya telah menjadi pelanggan setia Laundry Resik selama bertahun-tahun, dan saya tidak pernah kecewa.
                                </p>
                            </div>
                            <div className="card-name d-flex align-items-center">
                                <img src={testi2} alt="" />
                                <div className="ms-3">
                                <h5 className="fw-bold">Alya Chintia</h5>
                                <span>Customer
                                </span></div>
                            </div>
                            </div>
                            <div className="card card-testi">
                            <div className="card-body">
                                <h5 className="card-title text-muted"><FontAwesomeIcon icon={faQuoteRight}/></h5>
                                <p className="card-subtitle m-0 text-muted">
                                Mereka memberikan perhatian khusus pada detail pakaian saya. Saya merasa pakaian saya dalam keadaan terbaik.
                                </p>
                            </div>
                            <div className="card-name d-flex align-items-center">
                                <img src={testi3} alt="" />
                                <div className="ms-3">
                                <h5 className="fw-bold">Indah Solya</h5>
                                <span>Customer
                                </span></div>
                            </div>
                            </div>
                            <div className="card card-testi">
                            <div className="card-body">
                                <h5 className="card-title text-muted"><FontAwesomeIcon icon={faQuoteRight}/></h5>
                                <p className="card-subtitle m-0 text-muted">
                                Sangat puas dengan pelayanan Laundry Resik. Pakaian saya selalu bersih dan wangi setiap kali selesai dicuci!
                                </p>
                            </div>
                            <div className="card-name d-flex align-items-center">
                                <img src={testi4} alt="" />
                                <div className="ms-3">
                                <h5 className="fw-bold">Patrio Ras</h5>
                                <span>Customer
                                </span></div>
                            </div>
                            </div>
                            <div className="d-none d-sm-flex card card-testi">
                            <div className="card-body">
                                <h5 className="card-title text-muted"><FontAwesomeIcon icon={faQuoteRight}/></h5>
                                <p className="card-subtitle m-0 text-muted">
                                Pengalaman laundry online pertama saya dan saya sangat senang memilih Laundry Resik. Akan menjadi pelanggan setia.
                                </p>
                            </div>
                            <div className="card-name d-flex align-items-center">
                                <img src={testi5} alt="" />
                                <div className="ms-3">
                                <h5 className="fw-bold">Chaterina</h5>
                                <span>Customer
                                </span></div>
                            </div>
                            </div>
                            <div className="d-none d-sm-flex card card-testi">
                            <div className="card-body">
                                <h5 className="card-title text-muted"><FontAwesomeIcon icon={faQuoteRight}/></h5>
                                <p className="card-subtitle m-0 text-muted">
                                Website Laundry Resik sangat mudah digunakan. Pengaturan jadwal dan pembayaran online membuat hidup saya lebih praktis.
                                </p>
                            </div>
                            <div className="card-name d-flex align-items-center">
                                <img src={testi6} alt="" />
                                <div className="ms-3">
                                <h5 className="fw-bold">Sapty Reski</h5>
                                <span>Customer
                                </span></div>
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

export default TestiPage;
