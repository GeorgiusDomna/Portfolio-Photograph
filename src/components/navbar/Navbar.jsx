import React from 'react';
import './style.css';

const Navbar = ({listPhotoSetsName, currentPhotoSetName, setCurrentPhotoSetName, setNavbarElement}) => {

  function switchSection(event, name) {
    event.preventDefault();
    setCurrentPhotoSetName(name);
  }
  const navList = listPhotoSetsName.map(name => {
    return (
      <a
        key={name}
        href='#'
        className={currentPhotoSetName == name ? 'navbar_item navbar_item-active' : 'navbar_item'}
        onClick={(event) => switchSection(event, name)}>
        {name}
      </a>
    )
  })

  return (
    <div ref={(ref) => setNavbarElement(ref)} className="container">
      <div className="navbar">
        {navList}
      </div>
    </div>
  );
}

export default Navbar;