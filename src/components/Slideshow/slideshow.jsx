import React, { useState } from "react";
import './Slideshow.scss'
import slideShowArrow from '../../assets/Vector.svg'

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="slideshow__button slideshow__button--prev">
            <img src={slideShowArrow} alt="Précédent" />
          </button>
          <button onClick={nextSlide} className="slideshow__button slideshow__button--next">
            <img src={slideShowArrow} alt="Suivant" />
          </button>
        </>
      )}
      <img src={images[currentSlide]} alt="Appartement Carouselle" className="slideshow__image" />
      {images.length > 1 && (
        <div className="slideshow__counter">{currentSlide + 1} / {images.length}</div>
      )}
    </div>
  );
};

export default Slideshow;
