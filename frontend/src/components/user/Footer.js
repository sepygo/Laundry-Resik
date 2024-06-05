import React from 'react';
import logoOld from '../../assets/logo-old.png';

const Footer = () => {
  return (
    <footer>
        <div className="py-5 container">
        <div className="row">
            <div className="col-sm-6 mb-5 mb-sm-0">
                <img src={logoOld} alt="" />
                <p className="mt-4 pr-3 tw d-none d-sm-block">
                    Laundry Resik merupakan layanan jasa laundry kiloan,
                    satuan, sepatu, tas, baby stroller, karpet, dan lainnya. 
                    kami juga telah menyediakan jasa pickup delivery atau 
                    antar jemput terdekat di wilayah tamora dengan melalui 
                    website atau whatsApp customer service.
                </p>
            </div>
            <div className="col-6 col-sm-3">
                <h5 className="text-white fw-bold"><b>Link Lainnya</b></h5>
                <a className='text-decoration-none' href="/layanan">Daftar Harga</a>
                <a className='text-decoration-none' href="/lacak">Cek Pesanan</a>
                <a className='text-decoration-none' href="/testimoni">Testimoni</a>
                <a className='text-decoration-none' href="/hubungi-kami">Hubungi Kami</a>
            </div>
            <div className="col-6 col-sm-3">
                <h5 className="text-white fw-bold"><b>Lokasi Kami</b></h5>
                <p className="text-white" style={{marginTop: '18px'}}>
                    Jln. Limau Manis Pasar XIV Dusun 7 Gg. Warisan - Deli Serdang, 20362
                </p>
            </div>
        </div>
        </div>
        <div className="w-100 border-top py-3 px-5">
        <div className="container">
            <h6 className="m-0 tw">©2024 Laundry Resik</h6>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
