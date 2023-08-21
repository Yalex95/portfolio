import Header from "./components/Header"
import FooterPortfolio from "./components/FooterPortfolio";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import data from './json/portfolioData.json'


function App() {
const {banner, tech,projects,contact, footer} = data
  return (
    <>
    <Header/>
    <Hero banner = {banner}/>
    <Tech tech = {tech} />
    <Projects projects = {projects} />
    <Contact contact ={contact} />

    <FooterPortfolio footer = {footer} />
    
    </>
  )
}

export default App
