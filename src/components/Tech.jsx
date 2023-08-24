import React from 'react'
import Sliders from './Slider'

const Tech = ({tech}) => {
    const {title, subtitle, paragraph,description, technologies} = tech
  return (
    
    <section id="tech" className="bg-gray">
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 offset-md-2 bg-gray py-5 pe-5">
                    <h4 className="text-white text-shadow">{title}</h4>
                    <h3 className="text-blue ">{subtitle}{` `}
                    <span className="text-white ">{paragraph}</span></h3>
                    <p className="text-white">{description}</p>
                </div>
                 <div className="col-6 p-0">
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