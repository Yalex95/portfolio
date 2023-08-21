import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = ({contact}) => {
    const {title, text, links} = contact
  return (
    <section id="contact" className="bg-bby-blue">
        <div className="container-fluid">
            <div className="row justify-content-center py-5">
                <div className="col-4  py-5 contact-form ">
                    <p className='text-white'>{text}</p>
                    <h4 className="text-center text-white text-shadow">{title}!</h4>
                    <ul className="d-flex justify-content-center fs-4 text-gray">
                        {links.map(({id,href,data,icon})=>(
                            <li key={id} className="me-3"><a href={href} className="text-decoration-none text-gray"><FontAwesomeIcon icon={icon} className='me-3'/>{data}</a></li>
                        ))}
                
                    </ul>
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact