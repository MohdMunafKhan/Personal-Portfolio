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
                        <p>I am a Research Analyst at IP House with a Master of Computer Applications (MCA) degree and a strong foundation in both Data Analytics and Frontend Development. I work with tools such as SQL, Excel, Python, Power BI, Statistics, DBMS/RDBMS to analyze data, extract insights, and support data-driven decision-making.</p>

                        <p>Alongside my analytical expertise, I specialize in building responsive and user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. I enjoy transforming complex ideas into clean, interactive, and performance-driven digital experiences.</p>

                        <p>My combined skill set allows me to understand both the technical and analytical sides of product development — from data processing and visualization to frontend implementation and UI/UX optimization.</p>

                        <p>I am continuously expanding my knowledge in Node.js, Next.js, and advanced data concepts to grow toward Full Stack and Analytics-focused roles.</p>

                        <p className='text-danger fw-bold'>I am open to opportunities in Data Analytics, SQL Development, DBA, MIS Executive and related roles as well as in Frontend Development where I can contribute, learn, and build impactful digital solutions.</p>

                        <Button href='#connect' className="contact-btn mt-4">Contact Me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
