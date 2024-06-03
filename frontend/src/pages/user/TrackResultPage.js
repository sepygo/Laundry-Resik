import React from "react";

const TrackResultPage = () => {
  return (
    <section className="py-5 bg-white form-hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-5">Detail Pesanan</h2>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-3 progress-step">
                <ul className="progress-bar">
                <li className="step active">Input Pesanan</li>
                <li className="step active">Verifikasi</li>
                <li className="step active">Proses</li>
                <li className="step">Siap Ambil</li>
                <li className="step">Selesai</li>
                </ul>
            </div>
          <div className="col-9">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Status</td>
                  <td>Proses</td>
                </tr>
                <tr>
                  <td>Nomor Pesanan</td>
                  <td>54321</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td>Harper Downey</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Jl. Mohamad Toha No.57 Kota Bandung, Jawa Barat</td>
                </tr>
                <tr>
                  <td>Layanan</td>
                  <td>Cuci Sepatu</td>
                </tr>
                <tr>
                    <td rowSpan={2}>Item</td>
                    <td>3pcs - Sepatu Suede</td>
                </tr>
                <tr>
                    <td>1pcs - Sepatu Sneaker</td>
                </tr>
                <tr>
                    <td>Total Biaya</td>
                    <td>Rp.250.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackResultPage;
