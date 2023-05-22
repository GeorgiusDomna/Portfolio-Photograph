import React from 'react';
import './style.css';

const Slider = ({sliderList, currentIndex, setCurrentIndex}) => {
  const sliders = [];
  const dots = [];

  function switchSlider(action) {
    if (action == 'next') {
      setCurrentIndex(currentIndex + 1 === sliderList.length ? 0 : currentIndex + 1);
    } else if (action == 'prev') {
      setCurrentIndex(currentIndex === 0 ? sliderList.length-1 : currentIndex - 1);
    }
  }

  for (let i = 0; i < sliderList.length; i++) {
    const slide = <img
      src={sliderList[i]}
      alt="photo sessions"
      onClick={() => switchSlider('next')}
      className={i == currentIndex ? 'gallerey-library-photos_item' : 'gallerey-library-photos_item hidden'}
    />
    sliders.push(slide);
    const dot = <span
      className={i == currentIndex ? 'dot active' : 'dot'}
      onClick={() => setCurrentIndex(i)}
    />
    dots.push(dot)
  }

  return ( 
    <div className="slider">
      <div className="gallerey-library">
        <button onClick={() => switchSlider('prev')} className="gallerey-library_btn btn-prev">
          &lt;
        </button>
        <div className="gallerey-library-photos">
          {sliders}
        </div>
        <button onClick={() => switchSlider('next')} className="gallerey-library_btn btn-next">
          &gt;
        </button>
      </div>
      <div className="dot-container">
        {dots}
      </div>
    </div>
  )
}
 
export default Slider;