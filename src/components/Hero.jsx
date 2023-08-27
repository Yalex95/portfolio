import React, {useRef } from 'react'
import { DownloadPDF } from './DownloadPDF'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types'

const Hero = ({sectionRefs,banner,social}) => {
    const {title, subtitle, description} = banner

    const heroRef = useRef(null);
    sectionRefs.current['hero'] = heroRef;
  return (
    
    <section id="hero"  ref={heroRef}>
        <div className="container">
            <div className="row hero-row">
                <div className="col-6 z2">
                    <div>
                        <h3 className='mb-0'>{title}</h3> 
                        <h1>{subtitle}</h1>
                    </div>
                    <p className='mt-3'>{description}</p>
                    <div className='d-flex flex-column mt-5'>
                        
                            <a href="#contact-me" className=" btn contact-btn mb-4">Contact me</a>
                        <div className="social-links mb-3">
                            {social.map(({id,data,icon})=>(
                                <a key={id} href={data} className="text-gray me-3 text-decoration-none"><FontAwesomeIcon icon={icon} /> </a>
                                
                            ))}
                        </div>
                        <DownloadPDF/>
                    </div>
                </div>
                <div className="col-6">
                </div>
            </div>
        </div>
    </section>
  )
}

// Hero.propTypes = {}

export default Hero