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
                        <p>I am a Frontend Web Developer with a strong foundation in modern web technologies and a Master of Computer Applications (MCA) degree. I specialize in building responsive, user-friendly, and visually appealing web interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and MySQL.</p>

                        <p>Currently, I am working as a Frontend Developer, where I focus on transforming ideas and designs into functional, interactive, and performance-driven web experiences. I enjoy writing clean, maintainable code and improving UI/UX through modern frameworks and best practices.</p>

                        <p>Alongside my current role, I am actively exploring Node.js and Next.js to expand my skill set toward Full Stack Development.</p>

                        <p>I am open to exciting opportunities — both office-based and remote — where I can contribute, grow further, and build meaningful digital products that blend functionality with creativity.</p>

                        <Button href='#connect' className="contact-btn mt-4">Contact Me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
