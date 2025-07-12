import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <section className="contact" id="connect">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Contact Me</h1>
                    <h5>Feel free to reach out to me, if you are looking for Developer!</h5>

                    <div className="d-flex justify-content-center align-items-center mt-4 mail-phone">
                        <p className='me-3 mt-1'><FontAwesomeIcon icon={faEnvelope} /></p>
                        <p>munafk512@gmail.com</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mb-3 mail-phone">
                        <p className='me-3 mt-1'><FontAwesomeIcon icon={faPhone} /></p>
                        <p>8375056468</p>
                    </div>

                    <h5>You may also connect with me on these platforms!</h5>
                    <div className="links-2 d-flex justify-content-center align-items-center">
                        <a href="https://wa.me/+918375056468" target="_blank" className='me-3'><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href="https://instagram.com/_khan_munaf.97" target="_blank" className='ms-3'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
