import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {
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
          {Users.map(u => {
            return <Online key={u.id} user={u}/>
          })}
        </ul>
      </div>
    </div>
  )
}
