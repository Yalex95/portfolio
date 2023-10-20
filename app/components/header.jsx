import Navigation from "./navigation";
import icon from "~/assets/world-icon.svg";
import React, { useState, useEffect } from "react";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    
    setTimeout(() => {
    }, 500);
    if (window.scrollY > 10) { // Adjust the scroll threshold as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }    
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className={`header ${scrolled ? 'scrolled' : ''}`}>
        
      <Navigation />
      {/* <Link to="#contact" className="btn contact">
        Contact
      </Link> */}
      <div className="language">
        <img src={icon} alt="world" className="icon" />
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round">
            <div className="language-selection">
              <div>ES</div>
              <div>EN</div>
            </div>
          </span>
        </label>
      </div>
      </div>
    </header>
  );
};

export default Header;
