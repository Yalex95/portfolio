import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactUs } from './ContactForm';

const Contact = ({contact}) => {
    const {title, text, links} = contact
  return (
    <section id="contact" className="bg-bby-blue">
        <div className="container-fluid">
            <div className="row ">
                <div className="col-7 p-5">
                    
                <p className='text-white fs-5'>{text}</p>
                    <ul className="d-flex justify-content-center fs-4 text-gray">
                        {/* create random id */}
                        {links.map(({id,href,data,icon})=>(
                            <li key={id} className="me-3"><a href={href} className="text-decoration-none text-gray"><FontAwesomeIcon icon={icon} className='me-3'/>{data}</a></li>
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