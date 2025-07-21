import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.png';
import react from '../images/react.png';
import sql from '../images/sql.png';
import github from '../images/github.png';

const Skills = () => {
    return (
        <section className="skill-set" id='skills'>
            <div className="container">
                <div className="row mx-auto mb-5">
                    <div className="col-12 text-center skill-head">
                        <h1>Skills</h1>
                        <p>These are the tools and technologies, I work with.</p>
                    </div>
                </div>

                <div className="row mx-auto">
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={html} alt="HTML" className='img-fluid' />
                            <h5>HTML5</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={css} alt="CSS" className='img-fluid' />
                            <h5>CSS3</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={js} alt="JS" className='img-fluid' />
                            <h5>JavaScript</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={bootstrap} alt="BS" className='img-fluid' />
                            <h5>BootStrap 5</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={react} alt="React" className='img-fluid' />
                            <h5>React JS</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={sql} alt="SQL" className='img-fluid' />
                            <h5>MySQL</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={github} alt="Git" className='img-fluid' />
                            <h5>Github</h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
