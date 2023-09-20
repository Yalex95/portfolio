import React, {useRef } from 'react'
import { DownloadPDF } from './DownloadPDF'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils'; 


const Hero = ({sectionRefs,banner,social}) => {
    const {title, subtitle, description} = banner

    const heroRef = useRef(null);
    sectionRefs.current['hero'] = heroRef;

  return (
    
    <section id="hero"  ref={heroRef}>
        <div className="container">
            <div className="row hero-row">
                <div className="col-12 col-md-8 col-lg-6 z2">
                    <div>
                        <h3 className='mb-0'>{title}</h3> 
                        <h1 className='text-shadow text-white'>{subtitle}</h1>
                    </div>
                    <p className='mt-3 text-white'>{description}</p>
                    <div className='d-flex flex-column mt-5'>
                        
                            <a href="#contact-me" className=" btn contact-btn mb-4">Contact me</a>
                        <div className="social-links mb-3">
                            {social.map(({data,icon})=>(
                                <a key={generateUniqueId()} href={data} className="text-white me-3 text-decoration-none"><FontAwesomeIcon icon={icon} /> </a>
                                
                            ))}
                        </div>
                        <DownloadPDF/>
                    </div>
                </div>
                <div className="col-12 col-md-8 col-lg-6 align-items-center">
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="yeris-alejandra-aguilar-gordillo-a07aa9191" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://mx.linkedin.com/in/yeris-alejandra-aguilar-gordillo-a07aa9191/en?trk=profile-badge"></a></div>
              
                </div>
            </div>
        </div>
    </section>
  )
}

// Hero.propTypes = {}

export default Hero