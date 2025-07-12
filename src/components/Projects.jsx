import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import proj1 from '../images/restro-img.png';
import proj2 from '../images/gearup-auto-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section className="project" id='work'>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 text-center project-head">
            <h1>My Work</h1>
            <p>Bringing ideas to life through clean code, responsive design, and real world problem solving.</p>
          </div>
        </div>

        <div className="row p-4 mb-5 project-box">
          <div className="col-md-6 col-12 text-center pt-3 mb-3 project-box-img">
            <img src={proj1} alt="project-image" className='img-fluid'/>
          </div>
          <div className="col-md-6 col-12 project-box-txt">
            <h3 className='text-center text-primary'>The White Chillies - Restaurant Website</h3>
            <p>I developed a restaurant website using HTML5 and CSS3, featuring key sections like Home, Menu, Order, and Contact pages. The site was designed with a clean and user-friendly interface using custom CSS to enhance layout and visual appeal. By following front-end best practices, I improved overall functionality and performance, while also identifying opportunities for future enhancements such as responsive design for better accessibility across devices.</p>
            
            <div className="d-flex justify-content-center flex-wrap project-box-skill-1">
              <p className='px-3 py-2 me-4 border border-primary rounded-pill'>HTML5</p>
              <p className='px-3 py-2 border border-primary rounded-pill'>CSS3</p>
            </div>

            <a href="https://github.com/MohdMunafKhan/The-White-Chillies" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>

        <div className="row p-4 mb-3 project-box">
          <div className="col-md-6 col-12 text-center pt-3 mb-3 project-box-img">
            <img src={proj2} alt="project-image" className='img-fluid'/>
          </div>
          <div className="col-md-6 col-12 project-box-txt">
            <h3 className='text-center text-primary'>GearUp Auto - Car Website</h3>
            <p>I developed a responsive second-hand car buy-and-sell website using HTML, CSS, JavaScript, and Bootstrap. The website includes essential features such as a Home page, Buy Car page, Sell Car page, EMI Calculator, and FAQ section. I focused on delivering a smooth user experience by implementing intuitive navigation and interactive tools to help users explore car options and understand financing easily.</p>

            <div className="d-flex justify-content-center flex-wrap project-box-skill-2">
              <p className='px-3 py-2 me-4 border border-primary rounded-pill'>HTML5</p>
              <p className='px-3 py-2 me-4 border border-primary rounded-pill'>CSS3</p>
              <p className='px-3 py-2 me-4 border border-primary rounded-pill'>Bootstrap5</p>
              <p className='px-3 py-2 border border-primary rounded-pill'>JavaScript</p>
            </div>

            <a href="https://gearup-auto.netlify.app/" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
