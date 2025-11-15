import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import resume from '../files/Munaf Khan-web-dev resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section className="hero-section" id='hero-sec'>

      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 hero-content">
            <h4>Hello</h4>
            <h1>I'm Mohd Munaf Khan</h1>
            <h3>Frontend Web Developer</h3>

            <a href={resume} download="Munaf Khan-web-dev resume.pdf" className='cv-btn'>
              Download CV
            </a>

            <div className="loc d-flex justify-content-evenly align-items-center">
              <p><FontAwesomeIcon icon={faLocationDot} /></p>
              <p>New Delhi, India</p>
            </div>

            <div className="links1 d-flex justify-content-evenly align-items-center">
              <a href="https://www.linkedin.com/in/mohd-munaf-khan-30b195231" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/MohdMunafKhan?tab=repositories" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero;
