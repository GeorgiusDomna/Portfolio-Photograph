import React from 'react';
import './style.css'

const Header = ({navbarElement, blogElement}) => {

  function scrollToSection(e, element) {
    e.preventDefault();
    element.scrollIntoView();
  }

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-navbar">
          <a href="#" onClick={(e) => scrollToSection(e, blogElement)} className="header-navbar_item">Блог</a>
          <a href="#" onClick={(e) => scrollToSection(e, navbarElement)} className="header-navbar_item">Работы</a>
        </div>
        <div className="header-body">
          <h2 className="header_tite">Привет! Улыбнись, я фотографирую :)</h2>
          <p className="header_text">              
            Меня зовут Настя.<br/>
            Всю жизнь увлекаюсь фотографией, и сейчас протаптываю свой профессиональный путь.<br/>
            Приглашаю вас на съемку – будем ловить улыбки, красивые закаты в кадре и просто кайфовать.
          </p>
        </div>
      </div>
      <div className="header-right"></div>
    </div> 
  )
}

export default Header;