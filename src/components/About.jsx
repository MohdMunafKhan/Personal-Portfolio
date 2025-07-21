import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../App.css';
import Munaf from '../images/Munaf.jpg';

const About = () => {
    return (
        <section className="about-me" id='about'>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-12 text-center mb-5">
                        <h1>About Me</h1>
                    </div>
                </div>

                <div className="row mx-auto">
                    <div className="col-md-6 mb-4 text-center about-img">
                        <img src={Munaf} alt="myImage" className='img-fluid border border-3 border-primary rounded-circle' />
                    </div>
                    <div className="col-md-6 pt-2 about-info">
                        <i>Hii, I am Mohd Munaf Khan!!!</i>
                        <p>I’m a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, React, and SQL. Currently pursuing my MCA at Jamia Hamdard, I’ve had the opportunity to build responsive, user-friendly websites and gained practical experience during my internship by developing a fully functional live project.</p>

                        <p>My journey in web development began during my academic years, and ever since, I’ve been driven by a curiosity to learn and a desire to create. I’m constantly exploring new tools and technologies, including Angular and Tailwind CSS, to enhance my skill set and stay updated with industry trends.</p>

                        <p>I enjoy turning ideas into interactive digital experiences and am always eager to contribute clean, efficient code in collaborative and fast-paced environments.</p>

                        <Button href='#connect' className="contact-btn mt-4">Contact Me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
