import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils';

import Slider from 'react-slick';

class Sliders extends Component{
    render(){
        const settings = {
            dots: false,
            autoplay: true,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        
    const { technologies } = this.props;
   
    return (
        <>
          <Slider {...settings}>
            
          {technologies.map((technologies,index)=>(
                                
                <div key={generateUniqueId()} className="slider-item">
                    <div className={`d-flex align-items-center text-center  item py-5`}>
                        <div className="mx-auto mb-0">
                             <FontAwesomeIcon icon={technologies.icon} />
                            <p className='mb-0'>{technologies.tech}</p>
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