import React from 'react'
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="assets/gift.png" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Sumit Sati</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendslist">
          <li className="frienditem">
            <div className="rightbarporfileimgcontainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className='rightbarusername'>Joen Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
