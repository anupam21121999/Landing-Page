import React from 'react'
import './blog.css'
const Blog = () => {
  return (
    <div className='blog'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/blog1.jpg" className="blimg d-block w-100" alt="dark" />
    </div>
    <div className="carousel-item">
      <img src="/images/blog2.jpg" className="blimg d-block w-100" alt="dark" />
    </div>
    <div className="carousel-item">
      <img src="/images/blog3.jpg" className="blimg d-block w-100" alt="dark" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    <div className='blog-content'>
    <div className='blog-left'>
    <h1 className='title'>Welcome to the Blog Page!</h1>
    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='blog-right'>
      <img src='/images/blog4.png' className='blogimg' alt='dark' />
      <img src='/images/blog5.png' className='blogimg' alt='dark' />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Blog