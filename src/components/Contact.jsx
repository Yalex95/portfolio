import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactUs } from './ContactForm';
import { generateUniqueId } from '../utils/utils'; 

const Contact = ({sectionRefs,contact}) => {
    const {title, text, links} = contact

    const contactRef = useRef(null);
    sectionRefs.current['contact-me'] = contactRef;
  return (
    <section id="contact-me" className="bg-bby-blue" ref={contactRef}>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-7 p-5">
                    
                <p className='text-white fs-5'>{text}</p>
                    <ul className="d-flex justify-content-center fs-4 text-gray">
                        {/* create random id */}
                        {links.map(({href,data,icon})=>(
                            <li key={generateUniqueId()} className="me-3"><a href={href} className="text-decoration-none text-gray"><FontAwesomeIcon icon={icon} className='me-3'/>{data}</a></li>
                        ))}
                
                    </ul>
                </div>
                <div className="col-5 contact-form ">
                    <div className="row justify-content-start"> 
                        <div className="col-8 "> 
                            <h4 className="text-center text-white text-shadow mb-4">{title}!</h4>
                            <ContactUs/>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact