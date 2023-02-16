import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'


export default function Rightbar({ profile }) {

  const HomeRigthbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" className='birthdayImg' alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rigthbarAd' src="assets/ad.png" alt="" />
        <h4 className="rigthbarTitle">Online Friends</h4>
        <ul className="rigthbarFriendList">
          {Users.map((u =>
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    )
  }
  const Profilerigthbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rigthbarInfo">
          <div className="rigthbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoKey">New york</span>
          </div>
          <div className="rigthbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoKey">Douala</span>
          </div>
          <div className="rigthbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoKey">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className='rightbarFollowinImg'src="assets/person/1.jpeg" alt="" />
            <span className="rigthbarFollowingName">John Benito</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowinImg'src="assets/person/2.jpeg" alt="" />
            <span className="rigthbarFollowingName">John Benito</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowinImg'src="assets/person/3.jpeg" alt="" />
            <span className="rigthbarFollowingName">John Benito</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowinImg'src="assets/person/4.jpeg" alt="" />
            <span className="rigthbarFollowingName">John Benito</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowinImg'src="assets/person/5.jpeg" alt="" />
            <span className="rigthbarFollowingName">John Benito</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowinImg'src="assets/person/6.jpeg" alt="" />
            <span className="rigthbarFollowingName">John Benito</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { profile ? <Profilerigthbar/> : <HomeRigthbar />}
      </div>
    </div>
  )
}
