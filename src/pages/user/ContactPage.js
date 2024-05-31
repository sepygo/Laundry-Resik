import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Ilustration from '../../assets/contact.png';

const ContactPage = () => {
  return (
    <div>
        <section class="tracking-hero py-5 bg-white contact-bg-svg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10 bg-white d-flex p-4 rounded" style={{boxShadow: "0 4px 8px #0000001a"}}>
                    <div className="contact-form">
           <h2>Hubungi Kami</h2>
           <p>Kami disini untuk anda! Apa yang bisa kami bantu?</p>
           <form>
             <input type="text" className='bg-light border-0' placeholder="Masukkan nama anda" required />
             <input type="email" className='bg-light border-0' placeholder="Masukkan alamat email anda" required />
             <textarea className='bg-light border-0' placeholder="Masukkan pesan anda..." rows='5' required></textarea>
             <button type="submit" className='btn btn-primary'>Kirim</button>
           </form>
         </div>
         <div className="contact-info d-flex flex-column align-items-center">
           <img src={Ilustration} alt="Contact Illustration" />
           <div className='d-flex flex-column align-items-start'>
             <p>
                <div className='me-2 rounded-circle border border-primary d-flex justify-content-center align-items-center' style={{width:"30px", height:"30px"}}>
                    <FontAwesomeIcon icon={faLocationDot} className='text-primary'/>
                </div>
                Alamat
            </p>
             <p>
             <div className='me-2 rounded-circle border border-primary d-flex justify-content-center align-items-center' style={{width:"30px", height:"30px"}}>
                    <FontAwesomeIcon icon={faPhone} className='text-primary'/>
                </div>
                +62812345678
            </p>
             <p>
             <div className='me-2 rounded-circle border border-primary d-flex justify-content-center align-items-center' style={{width:"30px", height:"30px"}}>
                    <FontAwesomeIcon icon={faEnvelope} className='text-primary'/>
                </div>
                administrator@laundryresik.id
            </p>
           </div>
         </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    // <section className="contact-section">
    //   <div className="contact-container">
    //     <div className="contact-form">
    //       <h2>Hubungi Kami</h2>
    //       <p>Kami disini untuk anda! Apa yang bisa kami bantu?</p>
    //       <form>
    //         <input type="text" placeholder="Masukkan nama anda" required />
    //         <input type="email" placeholder="Masukkan alamat email anda" required />
    //         <textarea placeholder="Masukkan pesan anda..." required></textarea>
    //         <button type="submit">Kirim</button>
    //       </form>
    //     </div>
    //     <div className="contact-info">
    //       <img src="path/to/your/image.png" alt="Contact Illustration" />
    //       <div>
    //         <p><i className="fas fa-map-marker-alt"></i> Alamat</p>
    //         <p><i className="fas fa-phone"></i> +62812345678</p>
    //         <p><i className="fas fa-envelope"></i> administrator@laundryresik.id</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ContactPage;
