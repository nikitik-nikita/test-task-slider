import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [dotsData, setDotsData] = useState([]);
  const [activeDot, setActiveDot] = useState({ active: index });

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;

    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  const currentSlide = (index) => (() => {
    setIndex(index);
  });

  const setDotActive = (n) => {
    setActiveDot({ active: n });
  }



  useEffect(() => {
    setDotsData(images.map((item, index) => index));
  }, [images.length, index]);

  useEffect(() => {
    setDotActive(index);
  }, [index])

  return (
    images.length > 0 && (
      <div className="slider">
        <div className="slider__wrapper">
          <div className="slider__content">
            <div className="slider__number">{index + 1} / {images.length}</div>
            <a className="slider__button _next" onClick={slideRight}>&#10095;</a>
            <img className="slider__image" onTouchMoveCapture={slideRight} src={images[index]} alt={index + 1}/>
            <a className="slider__button _back" onClick={slideLeft}>&#10094;</a>
          </div>
        </div>
        <div className="slider__dots-wrapper">
          {
            dotsData.map((item, index) =>
              <span key={index} id={index} className={`slider__dot ${index === activeDot.active  ? "slider__dot-active" : ""}`}
                    onClick={currentSlide(index)}/>
            )
          }
        </div>
      </div>
    )
  );
}

export default Slider;

