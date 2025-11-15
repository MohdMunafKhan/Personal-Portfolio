import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button } from 'react-bootstrap';
import exp from '../images/exp-1.webp';
import letter from '../files/Internship.pdf';

const Experience = () => {
  return (
    <section className="exp" id='experience'>
        <div className="container mb-3">
            <div className="row mx-auto">
                <div className="col-12 text-center">
                    <h1>Experience</h1>
                    <p>What I've done and where I've grown.</p>
                </div>
            </div>
        </div>
        <div className="container exp-box">
            <div className="row mx-auto">
                <div className="col-md-4 mb-3 exp-det">
                    <h5 className='mb-2'>Sept 2025 - Present</h5>
                    <h6>New Delhi, India</h6>
                </div>
                <div className="col-md-8 col-12 mb-3 exp-text">
                    <h4>Frontend Developer Intern</h4>
                    <h5 className='text-success'>The WebPlant</h5>
                    <ul>
                        <li>Developed and maintained responsive, user-friendly web interfaces using React.js, HTML, CSS, JavaScript, and Bootstrap.</li>
                        <li>Collaborated with designers and backend developers to ensure seamless integration and optimized performance.</li>
                        <li>Customized and managed HubSpot templates, forms, and landing pages to enhance marketing workflows.</li>
                        <li>Improved website usability and loading speed through efficient code structure and reusable UI components.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Experience
