import React from 'react'
import "./online.css"

export default function Online({user}) {
  return (
    <li className="frienditem">
            <div className="rightbarporfileimgcontainer">
              <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className='rightbarusername'>{user.username}</span>
          </li>
  )
}
