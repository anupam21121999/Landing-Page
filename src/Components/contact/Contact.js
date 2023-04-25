import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <div className='lt'>
        <input type="text" placeholder="Enter your name" className="ltitems"></input>
        <input type="e-mail" placeholder="Enter your e-mail" className="ltitems"></input>
        <input type="subject" placeholder="Enter your subject" className="ltitems"></input>
        <textarea type="text" placeholder="Your Message" className="ltitems"></textarea>
        <button className='btns'>Submit</button>
      </div>

      <div className='rt'>
        <ul className='icons'>
        <i className="iconitem fa-brands fa-instagram" style={{color:"lightcoral"}}></i>
        <i className="iconitem fa-brands fa-twitter" style={{color:"#0000FF"}}></i>
        <i className="iconitem fa-brands fa-google" style={{color:"red"}}></i>
        <i className="iconitem fa-brands fa-facebook-f" style={{color:"#0000FF"}}></i>
        </ul>
      </div>

    </div>
  )
}

export default Contact