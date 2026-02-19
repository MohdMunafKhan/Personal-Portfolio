import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.png';
import tailwind from '../images/tailwind-img.jpg';
import react from '../images/react.png';
import sql from '../images/sql.png';
import excel from '../images/excel.png';
import python from '../images/python.png';
import powerBi from '../images/power-bi.jpg';
import tableau from '../images/tableau.png';
import statistics from '../images/statistics.png';
import aws from '../images/aws.png';
import azure from '../images/azure.png';
import oracle from '../images/oracle.png';
import sqlServer from '../images/ms-sql-server.png';
import psql from '../images/postgre-sql.webp';
import github from '../images/github.png';
import jupyter from '../images/jupyter.png';

const Skills = () => {
    return (
        <section className="skill-set" id='skills'>
            <div className="container">
                <div className="row mx-auto mb-5">
                    <div className="col-12 text-center skill-head">
                        <h1>Skills</h1>
                        <p className='text-danger'>These are the tools and technologies, I work with.</p>
                    </div>
                </div>

                <div className="row mx-auto">
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={sql} alt="SQL" className='img-fluid' />
                            <h5>MySQL</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={excel} alt="SQL" className='img-fluid' />
                            <h5>Microsoft Excel</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={python} alt="SQL" className='img-fluid' />
                            <h5>Python</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={powerBi} alt="SQL" className='img-fluid' />
                            <h5>Power BI</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={psql} alt="SQL" className='img-fluid' />
                            <h5>PostgreSQL</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={sqlServer} alt="SQL" className='img-fluid' />
                            <h5>Microsoft SQL Server</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={statistics} alt="SQL" className='img-fluid' />
                            <h5>Statistics</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={tableau} alt="SQL" className='img-fluid' />
                            <h5>Tableau</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={oracle} alt="SQL" className='img-fluid' />
                            <h5>Oracle Databases</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={aws} alt="SQL" className='img-fluid' />
                            <h5>Amazon Web Services</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={azure} alt="SQL" className='img-fluid' />
                            <h5>Azure</h5>
                        </div>
                    </div>
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
                            <img src={github} alt="Git" className='img-fluid' />
                            <h5>Github</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="skill">
                            <img src={jupyter} alt="SQL" className='img-fluid' />
                            <h5>Jupyter Notebook</h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
