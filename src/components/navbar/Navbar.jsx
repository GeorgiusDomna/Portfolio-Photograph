import React from 'react';
import './style.css';

const Navbar = ({photoSetListName, setPhotoSetListName, setCurrentIndex, setNavbarElement}) => {

  function getRefElem(ref) {
    setNavbarElement(ref)
  }

  const list = ['Одиночные', 'Парные', 'Мерпоприятия']
  function switchSection(event, name) {
    event.preventDefault();
    setPhotoSetListName(name);
    setCurrentIndex(0);
  }
  const navList = list.map(name => {
    return (
      <a
        href='#'
        className={photoSetListName == name ? 'navbar_item navbar_item-active' : 'navbar_item'}
        onClick={(event) => switchSection(event, name)}>
        {name}
      </a>
    )
  })

  return (
    <div ref={getRefElem} className="container">
      <div className="navbar">
        {navList}
      </div>
    </div>
  );
}

export default Navbar;