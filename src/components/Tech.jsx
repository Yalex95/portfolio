import React, {useRef, useState } from 'react'
import Sliders from './Slider'

const Tech = ({sectionRefs, tech}) => {
    const [readMore, setReadMore] = useState(false);

    const {title, subtitle, paragraph,description, technologies} = tech
 
    const techRef = useRef(null);
    sectionRefs.current['tech'] = techRef;

    const handleOnClick =()=>{
        setReadMore(!readMore);
    }
    return (
    
    <section id="tech" className="" ref={techRef}>
        <div className="container">
            <div className="row justify-content-center py-5">
                <div className="col-4">
                    <div className='p-relative image-container'></div>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="col-6">
                    <h4 className="text-gray">{title}</h4>
                    <h3 className="text-blue ">{subtitle}{` `}
                    <span className="">{paragraph}</span></h3>
                    <p className={`description-text ${readMore? '':'elipsis'} `}>{description}</p>
                    <button className="btn btn-outline-info btn-sm" onClick={handleOnClick}>{`${readMore? 'Read Less':'Read More'}`}</button>
                </div>
            </div>
            <div className="row justify-content-center py-5">
                    
                <h3 className=" text-gray">Tech Stack</h3>
                <div className="tech-slider ">
                    <Sliders technologies = {technologies}/>
                </div>
            </div>
                
        </div>
    </section>
  )
}

export default Tech