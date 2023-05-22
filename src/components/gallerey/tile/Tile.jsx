import React from 'react';
import './style.css'

const Tile = ({tileList}) => {
  return ( 
    <div className="gallerey-tile">
      <div className="gallerey-tile-left">
        <img src={tileList[0]} alt="" className="gallerey-tile_item" />
      </div>
      <div className="gallerey-tile-right">
        <div className="gallerey-tile-right-top">
          <img src={tileList[1]} alt="" className="gallerey-tile_item" />
        </div>
        <div className="gallerey-tile-right-buttom">
          <img src={tileList[2]} alt="" className="gallerey-tile_item" />
        </div>
      </div>
    </div>  
  );
}
 
export default Tile;