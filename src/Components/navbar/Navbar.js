import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="nav">
        <div className="left">
        <div className="content">
            <h1>LANDING</h1>
        </div>
        </div>

        <div className="centre" >
                <ul className="lists">
                    <li className="listitems">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="listitems">
                        <Link to="/About">ABOUT US</Link>
                    </li>
                    <li className="listitems">
                        <Link to="/Feature">FEATURES</Link>
                    </li>
                    <li className="listitems">
                        <Link to="/Blog">BLOG</Link>
                    </li>
                    <li className="listitems">
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                </ul>
        </div>

        <div className="right">
            <div className="content1">
                <button className="btn">Get Started</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar