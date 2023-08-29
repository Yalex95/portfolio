import React, {useRef } from 'react'
import Sliders from './Slider'

const Tech = ({sectionRefs, tech}) => {
    const {title, subtitle, paragraph,description, technologies} = tech
 
    const techRef = useRef(null);
    sectionRefs.current['tech'] = techRef;
    return (
    
    <section id="tech" className="bg-gray" ref={techRef}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-4 offset-md-0 offset-lg-2 bg-gray py-5 pe-5">
                    <h4 className="text-white text-shadow">{title}</h4>
                    <h3 className="text-blue ">{subtitle}{` `}
                    <span className="text-white ">{paragraph}</span></h3>
                    <p className="text-white description-text">{description}</p>
                </div>
                 <div className="col-md-12 col-lg-6 p-0">
                    <div className="tech-slider ">
                        <Sliders technologies = {technologies}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tech