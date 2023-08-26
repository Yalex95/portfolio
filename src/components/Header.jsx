import React, { useState } from "react";

const Header = () => {
  const [setselectedNavItem, setSetselectedNavItem] = useState('home');

  const handleNavItem = (selectedNavItem) =>{
    setSetselectedNavItem(selectedNavItem)
  }

  return (
    <>
   <nav id="nav" className="navbar text-white navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick ={()=>handleNavItem('home')} className={`nav-link ${setselectedNavItem === 'home'? 'active' : ''}`} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a onClick={()=>handleNavItem('tech')} className={`nav-link ${setselectedNavItem === 'tech' ? 'active' : ''}`} href="#tech">Technologies</a>
              </li>
              <li className="nav-item">
                <a onClick={()=>handleNavItem('projects')}  className={`nav-link ${setselectedNavItem === 'projects' ? 'active' : ''}`} href="#projects">Projects</a>
              </li>
              <li>
                <a onClick={()=>handleNavItem('contact')}  className={`nav-link ${setselectedNavItem === 'contact' ? 'active' : ''}`} href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
