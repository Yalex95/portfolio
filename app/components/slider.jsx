import React, { useState, useEffect } from 'react';

import bitbucket from '~/assets/bitbucket.svg'
import bootstrap from '~/assets/bootstrap.svg'
import css from '~/assets/css.svg'
const Slider = ({ slides, totalSlides }) => {
    const slides = [
        { icon: 'http://localhost:3000/app/assets/bitbucket.svg', tech: 'Tech 1' },
        { icon: 'http://localhost:3000/app/assets/bitbucket.svg', tech: 'Tech 2' },
        { icon: 'http://localhost:3000/app/assets/bitbucket.svg', tech: 'Tech 3' },
      ];
  const slideDuration = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next slide
      setCurrentIndex((prevSlide) => (prevSlide + 1) % totalSlides);
    }, slideDuration);

    return () => {
      clearInterval(timer);
    };
  }, [totalSlides, slideDuration]);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide}>Previous</button>
      <div className="slide">
        {Array.from({ length: 3 }).map((_, index) => {
          const slideIndex =
            (currentIndex + index) % totalSlides;
          const slide = slides[slideIndex];
          return (
            <div className="slide" key={index}>
                <img src={slide.icon} alt={slide.tech} />
              {slide.tech}
            </div>
          );
        })}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
