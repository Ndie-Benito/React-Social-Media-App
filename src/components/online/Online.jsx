import React from 'react'
import "./online.css"

export default function Online({user}) {
  return (
      <li className="rightbarFriend">
          <div className="rigthbarProfileImageContainer">
              <img className='rigthbarProfileImg' src={user.profilePicture} alt="" />
              <span className="rigthbarOnline"></span>
          </div>
          <span className="rigthbarUsername">{ user.username}</span>
      </li>
  )
}
