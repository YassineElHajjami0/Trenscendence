import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import "./upper-navbar.css"

const UpperNav = () => {
  return (
    <div className='upperNav'>
      <input type="text" />
      <div className='notif-and-profilePic'>
        <div className='notif-icon'><IoMdNotificationsOutline/></div>
        <div className='profile-picture'></div>
      </div>
    </div>
  )
}

export default UpperNav