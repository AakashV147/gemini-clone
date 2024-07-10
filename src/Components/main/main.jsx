import React from 'react'
import '/Users/aakashvenkatraman/gemini-clone/src/Components/main/main.css'
import { assets } from '../../assets/assets'

const main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello,Aakash Venkatraman</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Nearby Restaurants?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places nearby.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarise this concept.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default main
