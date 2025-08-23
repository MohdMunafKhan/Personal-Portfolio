import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button } from 'react-bootstrap';
import cerImg1 from '../images/udemy.jpg';
import cerImg2 from '../images/coursera.jpg';
import certificate1 from '../files/Frontend-Certification.pdf';
import certificate2 from '../files/SQL-Certification.pdf';

const Certification = () => {
    return (
        <section className="certification" id='certificate'>
            <div className="container mb-3">
                <div className="row mx-auto">
                    <div className="col-12 text-center">
                        <h1>Certifications</h1>
                        <p>Credentials & Achievements that validate my skills</p>
                    </div>
                </div>
            </div>

            <div className="container certification-box mb-3">
                <div className="row mx-auto">
                    <div className="col-md-6 col-12 mb-3 certification-text">
                        <h4 className='text-primary fs-3'>Complete Frontend Web Development</h4>
                        <ul>
                            <li>Gained hands-on experience in building responsive websites using HTML5, CSS3, and Bootstrap 5.</li>
                            <li>Strengthened core JavaScript skills and applied them in interactive UI development.</li>
                            <li>Developed and practiced modern frontend projects with React, including components, props, and hooks.</li>
                        </ul>

                        <Button href={certificate1} className='certification-btn mt-3'>View Certificate</Button>
                    </div>
                    <div className="col-md-6 mb-3 certification-img text-center">
                        <img src={cerImg1} alt="certificate-agency" className='img-fluid rounded-circle' />
                        <h3 className='mt-5 text-danger'>Issued By - Udemy</h3>
                    </div>
                </div>
            </div>

            <div className="container certification-box mb-3">
                <div className="row mx-auto">
                    <div className="col-md-6 col-12 mb-3 certification-text">
                        <h4 className='text-primary fs-3'>The Structured Query Language</h4>
                        <ul>
                            <li>Learned to write and optimize SQL queries for data extraction and manipulation.</li>
                            <li>Practiced using Joins, Aggregations, and Subqueries to analyze relational databases.</li>
                            <li>Gained practical skills in data analysis and reporting through real-world SQL exercises.</li>
                        </ul>

                        <Button href={certificate2} className='certification-btn mt-3'>View Certificate</Button>
                    </div>
                    <div className="col-md-6 mb-3 certification-img text-center">
                        <img src={cerImg2} alt="certificate-agency" className='img-fluid rounded-circle' />
                        <h3 className='mt-5 text-danger'>Issued By - Coursera</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certification
