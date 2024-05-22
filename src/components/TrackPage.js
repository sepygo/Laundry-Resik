import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrackPage = () => {
  return (
    <div>
        <section class="tracking-hero py-80 bg-white">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8">
                        <h2 class=" fw-bold text-center">Cek Progres Pesanan Anda</h2>
                        <p class=" text-center">
                            Order langsung dari rumah lebih mudah dengan memantau progres pesanan anda <br/>
                            Cepat Lengkap dan Akurat.
                        </p>
                        <div class="mt-5 d-flex justify-content-center">
                            <input style={{width:'70%'}} class=" form-control form-control-lg" type="text" placeholder="Masukan nomor orderan anda"/>
                            <NavLink to="/detail-lacak" style={{width:'30%'}} className="ms-3 px-5 py-3 btn btn-primary">Cek Pesanan</NavLink>
                        </div>
                        <span>*Masukkan hingga 5 nomor orderan di sini untuk lacak pesanan Anda</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default TrackPage;
