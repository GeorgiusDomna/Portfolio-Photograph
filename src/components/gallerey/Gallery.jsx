import React from 'react';
import Tile from './tile/Tile';
import Slider from './slider/Slider';
import './style.css';

const Gallery = ({photoSetList, currentIndex, setCurrentIndex}) => {
  return (
    <div className="container">
      <div className="gallery">
        <Tile
          tileList={photoSetList.tileList}
        />
        <Slider
          sliderList={photoSetList.sliderList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>  
  )
}
 
export default Gallery;