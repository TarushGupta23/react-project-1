import React from 'react'

export default function CloseFriend(params) {
    const user = params.user;
  return (
    <li className="sidebarfriend">
        <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
        <span className='sidebarfriendname'>{user.username}</span>
    </li>
  )
}
