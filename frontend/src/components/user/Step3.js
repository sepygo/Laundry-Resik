import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/constants';
import swal from 'sweetalert';

import service1 from '../../assets/service/service-1.png';
import service2 from '../../assets/service/service-2.png';
import service3 from '../../assets/service/service-3.png';
import service4 from '../../assets/service/service-4.png';
import service5 from '../../assets/service/service-5.png';

const Step3 = ({ formData, prevStep }) => {

    const navigate = useNavigate();

    const serviceImages = {
        'Laundry Kiloan': service1,
        'Laundry Satuan': service2,
        'Cuci Karpet': service3,
        'Laundry Sepatu': service4,
        'Laundry Perlengkapan Bayi': service5,
    };

    const sendMessage = async () => {
        const waNumber = '6282133987199';
        const message = `
✨ *KONFIRMASI PESANAN* ✨

📋 *Nama*: ${formData.name}
📞 *Nomor WA*: ${formData.phone}
🏠 *Alamat*: ${formData.address}
📝 *Catatan*: ${formData.notes}

🛒 *Detail Pesanan*:
${formData.services.map((service) => `• ${service}`).join('\n')}
        
Terima kasih telah memesan layanan kami. Kami akan segera menghubungi Anda untuk konfirmasi lebih lanjut.

Salam hangat,
Laundry Resik 🧺
        `;

        const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');

        const orderData = {
            order_date: new Date().toISOString().split('T')[0],
            status: 'Verifikasi',
            customer_name: formData.name,
            telp: formData.phone,
            address: formData.address,
            notes: formData.notes,
        };
        
        try {
            const response = await fetch(`${API_URL}/api/orders/byWA`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Gagal membuat pesanan');
            }

            const result = await response.json();
            const trackCode = result.trackCode;

            swal({
                title: "Pesanan Anda telah dikonfirmasi!",
                text: `Kode Tracking: ${trackCode}`,
                icon: "success",
                button: "OK",
            }).then(() => {
                navigate(`/detail-lacak/${trackCode}`);
            });

        } catch (error) {
            console.error('Error:', error);
            swal("Gagal mengkonfirmasi pesanan", "Terjadi kesalahan, silakan coba lagi.", "error");
        }
    };

    const confirmOrder = () => {
        swal({
            title: "Konfirmasi Pesanan",
            text: "Apakah Anda yakin ingin mengkonfirmasi pesanan ini?",
            icon: "warning",
            buttons: true,
        })
        .then((willSend) => {
            if (willSend) {
                sendMessage();
            }
        });
    };

    return (
        <div>
            <h3>Konfirmasi Pesanan</h3>
            <h4 className='fw-regular ms-sm-3 mt-3 mt-sm-0'>Pesanan :</h4>
            <div className='d-flex flex-wrap px-4 '>
                {formData.services.map((service, index) => (
                    <div key={index} className='p-2 me-3 mt-2 mt-sm-0 mb-2 border border-primary rounded d-flex align-items-center'>
                        <img src={serviceImages[service]} className="me-2" alt="" style={{ width: '35px' }} />
                        <h5 className='mb-0'>{service}</h5>
                    </div>
                ))}
            </div>

            <h4 className='fw-regular ms-sm-3 mt-4'>Data Diri :</h4>
            <form className="row g-3 px-sm-4">
                <div className="col-md-6">
                    <label htmlFor="nameOrder" className="form-label">Nama Lengkap</label>
                    <input type="text" className="form-control input-wizard readonly" id="nameOrder" value={formData.name} readOnly />
                </div>
                <div className="col-md-6">
                    <label htmlFor="telpOrder" className="form-label">Nomor WA <i className="bi-whatsapp"></i></label>
                    <input type="text" className="form-control input-wizard readonly" id="telpOrder" value={formData.phone} readOnly />
                </div>
                <div className="col-md-6">
                    <label htmlFor="addressOrder" className="form-label">Alamat Lengkap</label>
                    <textarea className="form-control input-wizard readonly" id="addressOrder" value={formData.address} readOnly rows="3"></textarea>
                </div>
                <div className="col-md-6">
                    <label htmlFor="notesOrder" className="form-label">Catatan</label>
                    <textarea className="form-control input-wizard readonly" id="notesOrder" value={formData.notes} readOnly rows="3"></textarea>
                </div>
            </form>
            <div className='w-100 d-flex justify-content-end mt-3 pe-sm-4'>
                <button onClick={prevStep} className='btn px-4 me-3 rounded btn-warning'>Back</button>
                <button onClick={confirmOrder} className='btn px-4 rounded btn-success'><i className="bi-whatsapp"></i> Konfirmasi</button>
            </div>
        </div>
    );
};

export default Step3;
