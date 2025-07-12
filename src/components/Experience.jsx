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
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Experience</h1>
                    <p>What I've done and where I've grown.</p>
                </div>
            </div>
        </div>
        <div className="container exp-box">
            <div className="row">
                <div className="col-md-3 col-12 mb-3 exp-img">
                    <img src={exp} alt="cognifyz" className='img-fluid rounded-circle'/>
                </div>
                <div className="col-md-6 col-12 mb-3 exp-text">
                    <h4>Frontend Developer Intern</h4>
                    <ul>
                        <li>Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.</li>
                        <li>Fetched and displayed dynamic content by integrating REST APIs into project components.</li>
                        <li>Translated UI/UX designs into clean, interactive, and user-friendly frontend layouts.</li>
                        <li>Delivered tasks within deadlines while ensuring performance, consistency, and code quality.</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12 mb-3 exp-det">
                    <h5 className='mb-5'>May 2025 - June 2025</h5>
                    <Button href={letter} className='exp-btn'>See Credientals</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
