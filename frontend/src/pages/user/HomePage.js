import React, { useState }  from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import home2 from '../../assets/home2.png'
import service1 from '../../assets/service/service-1.png'
import service2 from '../../assets/service/service-2.png'
import service3 from '../../assets/service/service-3.png'
import service4 from '../../assets/service/service-4.png'
import service5 from '../../assets/service/service-5.png'
import testi1 from '../../assets/testi/testi1.png'
import testi2 from '../../assets/testi/testi2.png'
import testi3 from '../../assets/testi/testi3.png'
import testi4 from '../../assets/testi/testi4.png'
import testi5 from '../../assets/testi/testi5.png'
import testi6 from '../../assets/testi/testi6.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

  const [trackingCode, setTrackingCode] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
      setTrackingCode(e.target.value);
  };

  const handleTrackOrder = () => {
      navigate(`/detail-lacak/${trackingCode}`);
  };

  return (
    <div>
  <section className="hero notch d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex flex-column justify-content-between">
              <div>
                <h6 className="tw fw-bold">BY LAUNDRY RESIK.COM</h6>
                <h1 className="tw fw-bold mt-4">Bingung Mencari Tempat Dalam Hal mencuci?</h1>
                <p className="tw">
                  Yuk, percayakan kepada Laundryresik.com dalam membantu anda untuk 
                  mendapatkan hasil cucian yang bersih, rapih dan nyaman saat beraktifitas.
                </p>
              </div>
              <div>
                <div className="d-flex">
                  <NavLink to="/pemesanan" className="btn-hero py-3 px-5 btn btn-secondary fw-bold">
                    <FontAwesomeIcon icon={faShoppingCart} className='me-2'/>
                    Pesan Sekarang
                  </NavLink>
                  <NavLink to="/hubungi-kami" className="btn-hero py-3 px-5 ms-4 btn btn-sm-lg btn-outline-light fw-bold">
                    Hubungi Kami
                  </NavLink>
                </div>
                <p className="tw fw-light text-light mt-2 mb-0">
                  Telah memproses 1000+ pesanan sejak 2022
                </p>
                <a className="text-white text-decoration-underline" href="testi.html">Lihat Testimoni</a>
              </div>
            </div>
            <div className="col-6 d-none d-sm-flex justify-content-center align-items-center">
              <div style={{aspectRatio:"4/3",borderTop:"10px solid #FFC600",width:'80%'}} className="px-5 py-4 rounded bg-white">
                <h3 className="w-100 pb-2" style={{borderBottom:"3px solid #FFC600"}}>Cek Pesanan Disini</h3>
                <input type="text" className="mt-5 mb-4 px-0 form-control rounded-0 shadow-none" style={{borderBottom:"3px dashed lightgray", borderLeft:"0",borderRight:"0",borderTop:"0"}} id="codeTrack" 
                  value={trackingCode}
                  onChange={handleInputChange}
                  placeholder="Masukan kode pesanan anda"
                />
                <button  onClick={handleTrackOrder} className="py-3 px-5 btn btn-warning fw-bold">Cek Disini </button>
                <p className="text-secondary fw-lightlight mt-3 mb-0" style={{fontSize:"14px"}}>
                  Tidak menemukan kode pesanan? <br/>
                  <NavLink to="/hubungi-kami" className="text-primary text-decoration-none fw-bold">Hubungi Kami </NavLink>
                  untuk informasi lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-80 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <img className="img-what" src={home2} alt="" />
            </div>
            <div className="col-12 col-sm-6 p-4 p-sm-0">
              <h2 className="fw-bold">Apa itu Laundry Resik?</h2>
              <p>
                Laundry Resik merupakan layanan jasa laundry kiloan, satuan, sepatu, tas, baby stroller,
                karpet, dan lainnya. kami juga telah menyediakan jasa pickup delivery atau antar jemput
                terdekat melalui website atau whatsApp customer service.
                <br /><br />
                Bagi Anda yang sedang mencari jasa laundry antar jemput terdekat, bisa langsung menghubungi
                kontak customer service Laundry Resik sekarang juga.
              </p>
              {/* <button className="py-3 px-5 btn btn-warning fw-bold">Hubungi kami</button> */}
              
              <NavLink to="/hubungi-kami" className="py-3 px-5 btn btn-warning fw-bold">
                    Hubungi Kami
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-80">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="tw fw-bold text-center">Layanan Kami</h2>
          <p className="tw text-center">
            Kami menyediakan beberapa layanan cuci dalam membantu <br />
            membersihkan kebutuhan aktivitas anda.
          </p>
          <div className="w-100 d-flex flex-wrap justify-content-center align-items-center">
            <div className="card card-service">
              <div className="d-flex justify-content-center align-items-center">
                <img src={service1} className="card-img-service" alt="" />
              </div>
              <div className="card-body">
                <h5 className="fw-bold text-center">Laundry Kiloan</h5>
                <p className="d-none d-sm-block card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                  sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
              </div>
            </div>
            <div className="card card-service">
              <div className="d-flex justify-content-center align-items-center">
                <img src={service2} className="card-img-service" alt="" />
              </div>
              <div className="card-body">
                <h5 className="fw-bold text-center">Laundry Satuan</h5>
                <p className="d-none d-sm-block card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                  sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
              </div>
            </div>
            <div className="card card-service">
              <div className="d-flex justify-content-center align-items-center">
                <img src={service3} className="card-img-service" alt="" />
              </div>
              <div className="card-body">
                <h5 className="fw-bold text-center">Cuci Karpet</h5>
                <p className="d-none d-sm-block card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                  sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
              </div>
            </div>
            <div className="card card-service">
              <div className="d-flex justify-content-center align-items-center">
                <img src={service4} className="card-img-service" alt="" />
              </div>
              <div className="card-body">
                <h5 className="fw-bold text-center">Laundry Sepatu</h5>
                <p className="d-none d-sm-block card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                  sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
              </div>
            </div>
            <div className="card card-service">
              <div className="d-flex justify-content-center align-items-center">
                <img src={service5} className="card-img-service" alt="" />
              </div>
              <div className="card-body">
                <h5 className="fw-bold text-center">Cuci Perlengkapan Bayi</h5>
                <p className="d-none d-sm-block card-text text-center">Jasa laundry baju kiloan di tamora dan sekitarnya, cocok untuk pakaian
                  sehari-hari. Sudah termasuk cuci, gosok dan lipat. Bisa antar-jemput</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
                <div className="ms-1 ms-sm-3">
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
                <div className="ms-1 ms-sm-3">
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
                <div className="ms-1 ms-sm-3">
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
                <div className="ms-1 ms-sm-3">
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
                <div className="ms-1 ms-sm-3">
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
                <div className="ms-1 ms-sm-3">
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

export default HomePage;
