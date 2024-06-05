import React from 'react';
import service1 from '../../assets/service/service-1.png'
import service2 from '../../assets/service/service-2.png'
import service3 from '../../assets/service/service-3.png'
import service4 from '../../assets/service/service-4.png'
import service5 from '../../assets/service/service-5.png'

import Wizard from '../../components/user/Wizard';

const OrderPage = () => {
  return (
    <div className='wizard'>
        <section class="py-4 bg-light order-hero">
        <div class="container">
            <div class="row">
                <div className='col-12'>
                    <h2 class="fw-bold text-center">Form<span className='text-primary'> Pemesanan</span></h2>
                    <h6 class="text-center">Buat pesanan dan kurir akan menjemput cucianmu</h6>
                    <Wizard />
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default OrderPage;
