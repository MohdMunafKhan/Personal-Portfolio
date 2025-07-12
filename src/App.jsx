import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
