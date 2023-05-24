import React from 'react';
import BlohLink from './blogLink/BlogLink';
import img1 from '../../img/instLink/grandzh.jpg';
import img2 from '../../img/instLink/glybinki.jpg';
import './style.css'

const Blog = ({setBlogElement}) => {

  return ( 
    <div ref={(ref) => setBlogElement(ref)} className="container">
      <div className="blog-disc">
        <h2 className="blog-disc_tettle">Мой блог</h2>
        <p className="blog-disc_text">
          Чтобы нам познакомиться поближе, приглашаю вас забежать в мои социальные сети:
        </p>
      </div>
      <div className="blog">
        <BlohLink
          url='https://www.instagram.com/nastuhagranzh'
          img={img1}
          title='Личный профиль'
          disc='Снимаю вас, себя и всё что вокруг'
          login='nastuhagranzh'
        />
        <BlohLink
          url='https://www.instagram.com/glybinki'
          img={img2}
          title='Мобильная фотография'
          disc='Россия через камеру моего телефона. Красивая, суровая и такая родная'
          login='glybinki'
        />
      </div>
    </div>  
  )
}
 
export default Blog;