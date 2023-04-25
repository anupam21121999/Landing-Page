import React from 'react'
import './content.css'
const Content = () => {
  return (
    <div className="contents">
        <div className="leftside">
            <div className="left-content">
                <p style={{fontSize:"22px"}}>Plan your me</p>
                <h2 style={{marginLeft:"20px",fontSize:"50px",color:"white"}}>Increase your<br/> Productivity</h2>
                <p className='para' style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='button'>View Video</button>
                <button className='button'>Get Start</button>
            </div>
        </div>

        <div className="rightside">
            <div className="right-content">
                <img src='/images/home.jpeg' style={{borderRadius:"250px 50px 50px 250px"}} alt="dark"/>
            </div>
        </div>
    </div>
  )
}

export default Content