import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <h1 className='abt-title'>ABOUT US</h1>
        <p className='abt-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div className='about-right'>
        <img src='/images/about.jpg' alt='dark' />
      </div>
    </div>
  )
}

export default About