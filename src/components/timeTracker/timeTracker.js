import React from "react";
import UserInfo from "../userInfo/userInfo";

const TimeTracker = () => {
    return(
        <div className="container">
            <div className="timeList">
                <UserInfo/>
                <div className="time"></div>
            </div>

            <div className="Cards"></div>
        </div>
    )
}

export default TimeTracker