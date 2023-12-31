import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactUs } from './ContactForm';

const Contact = ({sectionRefs,contact}) => {
    const {title, text, links} = contact

    const contactRef = useRef(null);
    sectionRefs.current['contact-me'] = contactRef;
    /**
   * TODO:
   * - remove contact me text and parragraph when the form is submited
   */
  return (
    <section id="contact-me"  ref={contactRef}>
        <div className="container-fluid contact-form">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12">
                    <h2 className="text-center text-white text-shadow ">{title}!</h2>
                    <p className='text-white mb-4 fs-4'>Feel free to reach out to me and let's embark on a journey to transform your digital dreams into reality.</p>
                    
                </div>
            </div>
            <div className="row justify-content-center  ">
                    <div className="col-lg-6 col-md-12">
                    <ContactUs/>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Contact