import React from 'react';
import service1 from '../../assets/service/service-1.png'
import service2 from '../../assets/service/service-2.png'
import service3 from '../../assets/service/service-3.png'
import service4 from '../../assets/service/service-4.png'
import service5 from '../../assets/service/service-5.png'

const ServicePage = () => {
  return (
    <div>
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
      <section className="py-80 price-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fw-bold text-center">Daftar Harga</h2>
            </div>
            <div className="col-12 col-sm-6 my-3">
              <div className="d-flex align-items-center">
                <img src={service1} alt="" />
                <h4 className="ms-2 ms-sm-4 mb-0 fw-bold">Laundry Kiloan</h4>
              </div>
              <div className="table-con mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='bg-primary text-white' scope="col">Daftar Layanan</th>
                      <th className='bg-primary text-white' scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Self Service CKL (5kg)</td>
                      <td>Rp. 30.000</td>
                    </tr>
                    <tr>
                      <td>Cuci Kering Lipat (3kg)</td>
                      <td>Rp. 25.000</td>
                    </tr>
                    <tr>
                      <td>Cuci Kering Lipat (5kg)</td>
                      <td>Rp. 35.000</td>
                    </tr>
                    <tr>
                      <td>Cuci Kering Setrika (5kg)</td>
                      <td>Rp. 50.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-3">
              <div className="d-flex align-items-center">
                <img src={service2} alt="" />
                <h4 className="ms-2 ms-sm-4 mb-0 fw-bold">Laundry Satuan</h4>
              </div>
              <div className="table-con mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='bg-primary text-white' scope="col">Daftar Layanan</th>
                      <th className='bg-primary text-white' scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bed Cover</td>
                      <td>Rp. 35.000</td>
                    </tr>
                    <tr>
                      <td>Bed Cover Jumbo</td>
                      <td>Rp. 45.000</td>
                    </tr>
                    <tr>
                      <td>Baju Muslim</td>
                      <td>Rp. 25.000</td>
                    </tr>
                    <tr>
                      <td>Kemeja Batik</td>
                      <td>Rp. 25.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-3">
              <div className="d-flex align-items-center">
                <img src={service3} alt="" />
                <h4 className="ms-2 ms-sm-4 mb-0 fw-bold">Cuci Karpet</h4>
              </div>
              <div className="table-con mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='bg-primary text-white' scope="col">Daftar Layanan</th>
                      <th className='bg-primary text-white' scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Karpet Rumah /m<sup>2</sup></td>
                      <td>Rp. 30.000</td>
                    </tr>
                    <tr>
                      <td>Karpet Masjid /m<sup>2</sup></td>
                      <td>Rp. 17.500</td>
                    </tr>
                    <tr>
                      <td>Gorden Tebal /m<sup>2</sup></td>
                      <td>Rp. 12.500</td>
                    </tr>
                    <tr>
                      <td>Gorden Tipis /m<sup>2</sup></td>
                      <td>Rp. 7.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-3">
              <div className="d-flex align-items-center">
                <img src={service4} alt="" />
                <h4 className="ms-2 ms-sm-4 mb-0 fw-bold">Laundry Sepatu</h4>
              </div>
              <div className="table-con mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='bg-primary text-white' scope="col">Daftar Layanan</th>
                      <th className='bg-primary text-white' scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sepatu Sneaker</td>
                      <td>Rp. 55.000</td>
                    </tr>
                    <tr>
                      <td>Sepatu Kanvas</td>
                      <td>Rp. 60.000</td>
                    </tr>
                    <tr>
                      <td>Sepatu Suedee</td>
                      <td>Rp. 65.000</td>
                    </tr>
                    <tr>
                      <td>Sepatu Leather</td>
                      <td>Rp. 75.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-3">
              <div className="d-flex align-items-center">
                <img src={service5} alt="" />
                <h4 className="ms-2 ms-sm-4 mb-0 fw-bold">Laundry Perlengkapan Bayi</h4>
              </div>
              <div className="table-con mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='bg-primary text-white' scope="col">Daftar Layanan</th>
                      <th className='bg-primary text-white' scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stroller Small/Cabin</td>
                      <td>Rp. 200.000</td>
                    </tr>
                    <tr>
                      <td>Stroller Kanvas</td>
                      <td>Rp. 250.000</td>
                    </tr>
                    <tr>
                      <td>Stroller Suedee</td>
                      <td>Rp. 300.000</td>
                    </tr>
                    <tr>
                      <td>Stroller Leather</td>
                      <td>Rp. 350.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
