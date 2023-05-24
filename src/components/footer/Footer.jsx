import React from 'react';
import img1 from '../../img/icons/telegramF.svg';
import img2 from '../../img/icons/vkF.svg';
import img3 from '../../img/icons/github.svg';
import './style.css'

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer-container">
        <h3 className="footer_title">Свяжитесь со мной:</h3>
        <p className="footer_text">+7(901)781-30-15</p>
        <p className="footer_text">gr.n@bk.ru</p>
        <div className="footer-socNet">
          <a href="https://t.me/agranzh" className="footer-socNet_link" target='_blank' rel='noneferrer'>
            <img src={img1} alt="" className="footer-socNet_img" />
          </a>
          <a href="https://vk.com/nastuhagranzh" className="footer-socNet_link" target='_blank' rel='noneferrer'>
            <img src={img2} alt="" className="footer-socNet_img" />
          </a>
        </div>
        <a href="https://github.com/GeorgiusDomna" className="dev" target='_blank' rel='noneferrer'>
          <img src={img3} alt="" className="logoDev" />
          <p className="dev_disc">created by GeorgiusDomna</p>
        </a>
      </div>
    </div>  
  );
}

export default Footer;