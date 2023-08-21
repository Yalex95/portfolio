import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils'; // Path to your utils file

import Slider from 'react-slick';

class Sliders extends Component{
    render(){
        const settings = {
            dots: false,
            autoplay: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        
    const { technologies } = this.props;
   
    return (
        <>
          <Slider {...settings}>
            
          {technologies.map(({icon,tech})=>(
                                
                <div key={generateUniqueId()} className="slider-item">
                    <div className="d-flex align-items-center text-center bg-bby-blue text-white item py-5">
                        <div className="m-auto">
                             <FontAwesomeIcon icon={icon} />
                            <h6>{tech}</h6>
                        </div>
                    </div>
                </div>
                                ))}
    
          </Slider>

        </>
      );
    }
}
export default Sliders