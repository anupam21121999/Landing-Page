import React from 'react'
import './feature.css'
const Feature = () => {
  return (
    <div className='feature'> 
    <div className='feature-top'>
      <button className='feature-btn' style={{color:"white"}}>Features</button>
      <h1 className='feature-title' style={{color:"white"}}>Our Core Features</h1>
      <p className='feature-para' style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className='feature-bottom'>

    <div className='feature-bottom1'>
    <i className="feature-icon fa-brands fa-facebook-f" style={{color:"blue"}}></i>
    <h1 className='features-title'>ALL FORMAT PLAN</h1>
    <p className='features-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <div className='feature-bottom2'>
    <i className="feature-icon fa-brands fa-instagram" style={{color:"red"}}></i>
    <h1 className='features-title'>SCHEDULING PLAN</h1>
    <p className='features-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <div className='feature-bottom3'>
    <i className="feature-icon fa-brands fa-square-twitter" style={{color:"white"}}></i>
    <h1 className='features-title'>PROGRESS PLAN</h1>
    <p className='features-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <div className='feature-bottom4'>
    <i className="feature-icon fa-brands fa-square-google-plus" style={{color:"orange"}}></i>
    <h1 className='features-title'>COMMUNITY PLAN</h1>
    <p className='features-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    </div>
     
    </div>
  )
}

export default Feature