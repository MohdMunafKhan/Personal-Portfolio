import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Skills = () => {
return (
    <section className="educations" id='edu'>
        <div className="container">
            <div className="row mx-auto mb-5">
                <div className="col-12 text-center edu-head">
                    <h1>Education</h1>
                    <p className='text-danger'>Academic qualifications that support my technical and analytical growth.</p>
                </div>
            </div>

            <div className="row mx-auto">
                <div className="col-md-6 col-12">
                    <div className="education">
                        <h3 className='text-primary pb-3'>Master of Computer Applications (MCA)</h3>
                        <h5>Jamia Hamdard University, New Delhi | 2023 – 2025</h5>
                        <h5>Graduated: Sept 2025 | <span className='text-danger'>CGPA: 8.7</span></h5>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="education">
                        <h3 className='text-primary pb-3'>Bachelor of Computer Applications (BCA)</h3>
                        <h5>Jamia Hamdard University, New Delhi | 2020 – 2023</h5>
                        <h5>Graduated: July 2023 | <span className='text-danger'>CGPA: 8.4</span></h5>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                        <div className="education">
                        <h3 className='text-primary pb-3'>Higher Secondary (Class 12)</h3>
                        <h5>Greenfields Public School, New Delhi | 2019 – 2020</h5>
                        <h5>CBSE Board | <span className='text-danger'>Percentage: 76.8%</span></h5>
                    </div>
                    
                </div>
                <div className="col-md-6 col-12">
                        <div className="education">
                            <h3 className='text-primary pb-3'>Secondary School (Class 10)</h3>
                            <h5>Greenfields Public School, New Delhi | 2017 – 2018</h5>
                            <h5>CBSE Board | <span className='text-danger'>Percentage: 77.2%</span></h5>
                        </div>
                   
                </div>

            </div>
        </div>
    </section>
)
}

export default Skills
