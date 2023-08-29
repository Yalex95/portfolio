import React, { useState, useEffect } from "react";

const Header = ({sectionRefs}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleNavigationClick = (sectionId) => {
    const ref = sectionRefs.current[sectionId];
    if (ref && ref.current) {
      const offsetTop = ref.current.getBoundingClientRect().top-50;
      window.scrollTo({
        top: window.scrollY + offsetTop,
        behavior: 'smooth', 
      });
    }
  };
  const handleScroll = () => {
    
    setTimeout(() => {
      setCollapsed(false)
    }, 500);
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    for (const [section, ref] of Object.entries(sectionRefs.current)) {
      if (ref.current && ref.current.getBoundingClientRect().top <= 70) {
        setActiveSection(section);
      }
    }
    
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCollapse = ()=>{
    setCollapsed(!collapsed)
  }

  return (
    <>
   <nav id="nav" className={`navbar text-white navbar-expand-lg navbar-light bg-white fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button onClick={() => handleCollapse()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${collapsed && 'show'} collapse navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick={() => handleNavigationClick('hero')}  className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} >Home</a>
              </li>
              <li className="nav-item">
                <a onClick={() => handleNavigationClick('tech')}  className={`nav-link ${activeSection === 'tech' ? 'active' : ''}`}>Technologies</a>
              </li>
              <li className="nav-item">
                <a onClick={() => handleNavigationClick('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} >Projects</a>
              </li>
              <li>
                <a onClick={() => handleNavigationClick('contact-me')}  className={`nav-link ${activeSection === 'contact-me' ? 'active' : ''}`} >Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
