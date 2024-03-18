import React from "react";
import profilePicture from '../../images/image-jeremy.png'
import './userInfo.css'

const UserInfo = () =>{
    return(
        <div className="userInfo">
            <img src={profilePicture} alt="profile"/>
            <p>Report for</p>
            <h2 className="username">Jeremy Robson</h2>
        </div>
    )
}

export default UserInfo