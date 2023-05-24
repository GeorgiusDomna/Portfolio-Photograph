import React from 'react';
import instLogo from '../../../img/icons/inst.svg';
import './style.css'

const BlohLink = ({url, img, title, disc, login}) => {
  return (
    <a href={url} className="blog_link" target='_blank' rel='noneferrer'>
      <img src={img} alt="link" className="blog_img" />
      <h2 className="blog_title">{title}</h2>
      <p className="instLink">
        <img src={instLogo} alt="" className="instLogo" />
        {login}
      </p>
      <p className="blog_desc">
        {disc}
      </p>
    </a>  
  );
}
 
export default BlohLink;