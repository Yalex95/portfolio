import Header from "./components/Header"
import FooterPortfolio from "./components/FooterPortfolio";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import data from './json/portfolioData.json'


function App() {
const {banner, social, tech,projects,contact, footer} = data
  return (
    <>
    <Header/>
    {/* fix scroll spy */}
    <div data-bs-spy="scroll" data-bs-target="#nav" data-bs-offset="0" tabindex="0">
    <Hero banner = {banner} social={social}/>
    <Tech tech = {tech} />
    <Projects projects = {projects} />
    <Contact contact ={contact} />

    </div>

    <FooterPortfolio footer = {footer} />
    
    </>
  )
}

export default App
