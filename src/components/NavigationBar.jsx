import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const NavigationBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleClick = () => {
        setIsNavOpen(false);
    };

    return (
        <section className="nav-panel">
            <Navbar expand="lg" bg='dark' variant='dark' className='py-3'>
                <Container>
                    <Navbar.Brand href="#hero-sec" className='text-primary nav-head'>Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsNavOpen(!isNavOpen)}/>
                    <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="#hero-sec" onClick={handleClick} className='nav-links me-3'>Home</Nav.Link>
                            <Nav.Link href="#about" onClick={handleClick} className='nav-links me-3'>About Me</Nav.Link>
                            <Nav.Link href="#skills" onClick={handleClick} className='nav-links me-3'>Skills</Nav.Link>
                            <Nav.Link href="#experience" onClick={handleClick} className='nav-links me-3'>Experience</Nav.Link>
                            <Nav.Link href="#work" onClick={handleClick} className='nav-links me-3'>Projects</Nav.Link>
                            <Nav.Link href="#connect" onClick={handleClick} className='nav-links'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
};

export default NavigationBar
