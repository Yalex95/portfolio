import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils';

import Slider from 'react-slick';

class Sliders extends Component{
    render(){
        const settings = {
            dots: false,
            autoplay: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        
    const { technologies } = this.props;
   
    return (
        <>
          <Slider {...settings}>
            
          {technologies.map((technologies,index)=>(
                                
                <div key={generateUniqueId()} className="slider-item">
                    <div className={`d-flex align-items-center text-center ${'bg-'+index} text-white item py-5`}>
                        <div className="m-auto">
                             <FontAwesomeIcon icon={technologies.icon} />
                            <h6 className='d-none d-md-block'>{technologies.tech}</h6>
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