import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils';

const FooterPortfolio = ({footer}) => {
  return (
    
    
    <footer className="bg-gray py-4">
        <div className="container">
            <div className="row">
                
                <div className="col-4"></div>
                <div className="col-4 d-flex justify-content-center fs-2">
                  {/* create random id */}
                  {footer.map(({data,icon})=>(
                    <a key={generateUniqueId()} href={data} className="text-white me-3 text-decoration-none"><FontAwesomeIcon icon={icon} /> </a>
                    
                  ))}
                </div>
                <div className="col-4 d-flex justify-content-center fs-2">
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterPortfolio