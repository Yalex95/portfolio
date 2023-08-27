import Header from "./components/Header"
import FooterPortfolio from "./components/FooterPortfolio";
import React, { useRef } from 'react';
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import data from './json/portfolioData.json'


function App() {
const {banner, social, tech,projects,contact, footer} = data


const sectionRefs = useRef({});
  return (
    <>
    <Header sectionRefs={sectionRefs}/>
    <Hero sectionRefs={sectionRefs} banner = {banner} social={social}/>
    <Tech sectionRefs={sectionRefs} tech = {tech} />
    <Projects sectionRefs={sectionRefs}  projects = {projects} />
    <Contact sectionRefs={sectionRefs}  contact ={contact} />

    <FooterPortfolio footer = {footer} />
    
    </>
  )
}

export default App
