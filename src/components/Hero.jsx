import React from 'react'
// import PropTypes from 'prop-types'

const Hero = ({banner}) => {
    const {title, subtitle, description} = banner
  return (
    
    <section id="hero" className="">
        
        <canvas id="canvas" className="position-absolute pt-5"></canvas>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-3 offset-md-1 offset-lg-0 z2 bg-gray-opacity  ">
                    <div>
                        <h3>{title}</h3> 
                        <h1><span>{subtitle}</span></h1>
                    </div>
                    <p>{description}</p>
                    <a href="#contact" className=" btn contact-btn px-4">Contact me</a>
                </div>
                <div className="col-9">
                </div>
            </div>
        </div>
    </section>
  )
}

// Hero.propTypes = {}

export default Hero