import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils';

const FooterPortfolio = ({footer, social, contact}) => {
  const {links} = contact
  return (
    
    
    <footer className="bg-gray" id="footer">
        <div className="container">
            <div className="row">
                
                <div className="col-12 col-md-4">
                  <h6 className='text-white'> Feel free to reach out!</h6>
                {links.map(({href, data, icon})=>(
                    <a key={generateUniqueId()} href={href} className="d-block text-white me-3 text-decoration-none mb-2"><FontAwesomeIcon icon={icon} className='me-2'/> {data}</a>
                    
                  ))}

                </div>
                <div className="col-12 col-md-4 d-flex justify-content-start fs-2">
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-end fs-2">
                  {social.map(({data,icon})=>(
                    <a key={generateUniqueId()} href={data} className="text-white me-3 text-decoration-none"><FontAwesomeIcon icon={icon} /> </a>
                    
                  ))}
                </div>
            </div>
        </div>
        <div className='row footer-bottom py-3 mt-3'>
          <div className="col-4 text-center text-white">
                    <div><FontAwesomeIcon icon="fa-solid fa-map-pin" /> Tijuana, BC, Mexico</div>
          </div>
          <div className="col-4 text-center">
            <p className='text-white m-0'>v1.0</p>
          </div>
          <div className="col-4"></div>
        </div>
    </footer>
  )
}

export default FooterPortfolio