import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackPage = () => {
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
            <section className="tracking-hero py-80 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <h2 className=" fw-bold text-center">Cek Progres Pesanan Anda</h2>
                            <p className=" text-center">
                                Order langsung dari rumah lebih mudah dengan memantau progres pesanan anda <br/>
                                Cepat Lengkap dan Akurat.
                            </p>
                            <div className="input-box mt-5 d-flex flex-sm-nowrap flex-wrap justify-content-center">
                                {/* <input style={{width:'70%'}} className=" form-control form-control-lg" type="text" placeholder="Masukan nomor orderan anda"/> */}
                                <input 
                                    style={{ width:'70%' }} 
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    placeholder="Masukan nomor orderan anda" 
                                    value={trackingCode}
                                    onChange={handleInputChange}
                                />
                                <small className='ps-2 d-block d-sm-none'>*Masukkan kode orderan di sini untuk lacak pesanan Anda</small>
                                <button onClick={handleTrackOrder} style={{width:'30%'}} className="ms-3 px-5 py-3 btn btn-primary">Cek Pesanan</button>
                            </div>
                            <span className='d-none d-sm-block'>*Masukkan kode orderan di sini untuk lacak pesanan Anda</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrackPage;
