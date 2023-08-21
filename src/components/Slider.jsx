import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        
    return (
        <>
          <Slider {...settings}>
                        <div className="slider-item">
                            <div className="d-flex align-items-center text-center bg-bby-blue text-white item py-5">
                                <div className="m-auto">
                                    <FontAwesomeIcon icon=" fa-brands  fa-wordpress" />
                                    <h6>Wordpress theme <span>development</span></h6>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item">
                            <div className="d-flex align-items-center text-center bg-blue-bb text-white item py-5">
                                <div className="m-auto">
                                <FontAwesomeIcon icon="fa-brands fa-php" />
                                <h6>PHP</h6>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item">
                            <div className="d-flex align-items-center text-center bg-blue-bbd text-white item py-5">
                                <div className="m-auto">
                                   <FontAwesomeIcon icon="fa-brands fa-react" />
                                    <h6>React development</h6>
                                </div>
                            </div>
                        </div>
    
          </Slider>

        </>
      );
    }
}
export default Sliders