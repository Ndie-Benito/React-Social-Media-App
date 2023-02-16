import React from 'react';
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";


export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />

                <div className="profileRight">
                    <div className="profileRigthTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" className='profileCoverImg' alt="" />
                            <img src="assets/person/7.jpeg" className='profileUserImage' alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Benito le tueur</h4>
                            <span className='profileInfoDesc'>Hello my friends !</span>
                        </div>
                    </div>
                    <div className="profileRigthBottom">
                        <Feed />
                        <Rightbar Profile/>
                    </div>

                </div>

            </div>
        </>
    )
}
