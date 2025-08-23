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
                        <i className='text-primary'>Hii, I am Mohd Munaf Khan!!!</i>
                        <p>I am a Web Developer, recently graduated with a Master of Computer Applications (MCA), and available to join immediately. With strong expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and MySQL, I specialize in crafting responsive, user-friendly, and visually appealing web applications.</p>

                        <p>I am proficient in frontend development and currently exploring Node.js (Backend Development) and Next.js to grow into a Full Stack Developer. I am looking for an opportunity to start my career as a Frontend Developer or a Web Developer.</p>

                        <p>I am open to both office-based roles and remote opportunities, bringing flexibility and adaptability to any team. I am eager to apply my knowledge, learn continuously, and create modern web solutions that blend functionality with creativity.</p>

                        <Button href='#connect' className="contact-btn mt-4">Contact Me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
