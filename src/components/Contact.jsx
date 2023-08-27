import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactUs } from './ContactForm';

const Contact = ({sectionRefs,contact}) => {
    const {title, text, links} = contact

    const contactRef = useRef(null);
    sectionRefs.current['contact-me'] = contactRef;
  return (
    <section id="contact-me"  ref={contactRef}>
        <div className="container-fluid contact-form">
            <div className="row justify-content-center">
                <div className="col-6 ">
                    <h2 className="text-center text-white text-shadow ">{title}!</h2>
                    <p className='text-white mb-4'>Let's collaborate to turn your digital dreams into reality. Together, we can sculpt a digital world that's as functional as it is beautiful.</p>
                    
                </div>
            </div>
            <div className="row justify-content-center  ">
                    <div className="col-6">
                    <ContactUs/>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Contact