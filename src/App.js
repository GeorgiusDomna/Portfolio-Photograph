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

  const [photoSetListName, setPhotoSetListName] = useState('Одиночные');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [navbarElement, setNavbarElement] = useState(null);
  const [blogElement, setBlogElement] = useState(null);

  return (
    <>
      <Header 
        navbarElement={navbarElement}
        blogElement={blogElement}
      />
      <Navbar
        photoSetListName={photoSetListName}
        setPhotoSetListName={setPhotoSetListName}
        setCurrentIndex={setCurrentIndex}
        setNavbarElement={setNavbarElement}
      />
      <Gallery
        photoSetList={photoSetLists[photoSetListName]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Blog 
        setBlogElement={setBlogElement}
      />
      <Footer />
    </>
  )
}

export default App;