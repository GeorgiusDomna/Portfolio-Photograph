import React from 'react';
import img1 from '../../img/instLink/grandzh.jpg';
import img2 from '../../img/instLink/glybinki.jpg';
import img3 from '../../img/icons/inst.svg';
import './style.css'

const Blog = ({setBlogElement}) => {

  function createRefElem(ref) {
    setBlogElement(ref)
  }

  return ( 
    <div ref={createRefElem} className="container">
      <div className="blog-disc">
        <h2 className="blog-disc_tettle">Мой блог</h2>
        <p className="blog-disc_text">
          Чтобы нам познакомиться поближе, приглашаю вас забежать в мои социальные сети:
        </p>
      </div>
      <div className="blog">
        <a href="https://www.instagram.com/nastuhagranzh" className="blog_link" target='_blank' rel='noneferrer'>
          <img src={img1} alt="link" className="blog_img" />
          <h2 className="blog_title">Личный профель</h2>
          <p className="instLink">
            <img src={img3} alt="" className="instLogo" />
            nastuhagranzh
          </p>
          <p className="blog_desc">
            Снимая вас, себя и всё что вокруг
          </p>
        </a>
        <a href="https://www.instagram.com/glybinki" className="blog_link" target='_blank' rel='noneferrer'>
          <img src={img2} alt="link" className="blog_img" />
          <h2 className="blog_title">Мобильная фотография</h2>
          <p className="instLink">
            <img src={img3} alt="" className="instLogo" />
            glybinki
          </p>
          <p className="blog_desc">
            Россия через камеру моего телефон. Красивая, суровая и такая родная
          </p>
        </a>
      </div>
    </div>  
  )
}
 
export default Blog;