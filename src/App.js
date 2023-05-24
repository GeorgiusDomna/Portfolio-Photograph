import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Gallery from './components/gallerey/Gallery';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import { photoSetLists } from './helpers/photoSetList';
import { useState } from 'react';
import './styles/main.css';

function App() {

  const listPhotoSetsName = Object.keys(photoSetLists);
  const [currentPhotoSetName, setCurrentPhotoSetName] = useState(listPhotoSetsName[0]);
  const [navbarElement, setNavbarElement] = useState(null);
  const [blogElement, setBlogElement] = useState(null);

  return (
    <>
      <Header 
        navbarElement={navbarElement}
        blogElement={blogElement}
      />
      <Navbar
        listPhotoSetsName={listPhotoSetsName}
        currentPhotoSetName={currentPhotoSetName}
        setCurrentPhotoSetName={setCurrentPhotoSetName}
        setNavbarElement={setNavbarElement}
      />
      <Gallery
        photoSetList={photoSetLists[currentPhotoSetName]}
      />
      <Blog 
        setBlogElement={setBlogElement}
      />
      <Footer />
    </>
  )
}

export default App;