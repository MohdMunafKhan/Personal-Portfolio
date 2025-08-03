import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import proj1 from '../images/restro-img.png';
import proj2 from '../images/gearup-auto-img.png';
import proj3 from '../images/pathshala.png';
import proj4 from '../images/infomate-img.png';
import proj5 from '../images/white-chillies.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section className="project" id='work'>
      <div className="container">
        <div className="row mx-auto mb-3">
          <div className="col-12 text-center project-head">
            <h1>My Work</h1>
            <p>Bringing ideas to life through clean code, responsive design, and real world problem solving.</p>
          </div>
        </div>

        <div className="row mx-auto p-4 mb-3 project-box">
          <div className="col-md-6 text-center pt-3 mb-3 project-box-img">
            <img src={proj5} alt="project-image" className='img-fluid' />
          </div>
          <div className="col-md-6 project-box-txt">
            <h3 className='text-center text-primary'>The White Chillies – Restaurant Website</h3>
            <p><i>Tech Stack: React JS, Tailwind CSS, HTML, and CSS</i></p>
            <p>- Developed a fully responsive restaurant website using React, featuring dynamic pages like Menu, Cart, Checkout, Reservation, and Contact.</p>
            <p>- Integrated cart functionality with real-time updates, order processing, and user interaction through modals and form validation for a seamless online ordering experience.</p>

            <a href="https://the-white-chillies.netlify.app/" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>

        <div className="row mx-auto p-4 mb-3 project-box">
          <div className="col-md-6 text-center pt-3 mb-3 project-box-img">
            <img src={proj4} alt="project-image" className='img-fluid' />
          </div>
          <div className="col-md-6 project-box-txt">
            <h3 className='text-center text-primary'>MyInfoMate – Multi-API React Web App</h3>
            <p><i>Tech Stack: React JS, HTML5, CSS3, Bootstrap 5, Axios, and API's</i></p>
            <p>- MyInfoMate is a responsive React web app that integrates four APIs to offer real-time weather updates, movie details, Indian public holidays, and English word definitions.</p>
            <p>- MyInfoMate is a responsive React web app that integrates four APIs to offer real-time weather updates, movie details, Indian public holidays, and English word definitions.</p>

            <a href="https://my-info-mate.netlify.app/" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>

        <div className="row mx-auto p-4 mb-3 project-box">
          <div className="col-md-6 text-center pt-3 mb-3 project-box-img">
            <img src={proj3} alt="project-image" className='img-fluid' />
          </div>
          <div className="col-md-6 project-box-txt">
            <h3 className='text-center text-primary'>Pathshala Education Hub - Free Learning Resources Website</h3>
            <p><i>Tech Stack: React JS, HTML5, CSS3, Bootstrap 5 and React-Router</i></p>
            <p>Pathshala is a responsive educational hub built with React JS, React-Bootstrap, and Bootstrap 5, offering free study materials and mentor support.</p>
            <p>It features a clean UI with components like a membership form, donation options, and contact page, highlighting form handling, routing, and frontend skills.</p>

            <a href="https://pathshala-edu-hub.netlify.app/" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>

        <div className="row mx-auto p-4 mb-3 project-box">
          <div className="col-md-6 text-center pt-3 mb-3 project-box-img">
            <img src={proj2} alt="project-image" className='img-fluid' />
          </div>
          <div className="col-md-6 project-box-txt">
            <h3 className='text-center text-primary'>GearUp Auto - Car Website</h3>
            <p><i>Tech Stack: HTML5, CSS3, Bootstrap 5 and JavaScript</i></p>
            <p>Developed a responsive second-hand car buy-and-sell website using HTML, CSS, JavaScript, and Bootstrap, featuring Home, Buy Car, Sell Car, EMI Calculator, and FAQ pages.</p>
            <p>Emphasized smooth user experience with intuitive navigation and interactive tools for exploring car options and understanding financing.</p>

            <a href="https://gearup-auto.netlify.app/" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
