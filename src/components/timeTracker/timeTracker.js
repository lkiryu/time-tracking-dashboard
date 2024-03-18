import React from "react";
import UserInfo from "../userInfo/userInfo";
import Time from "../time/time";

const TimeTracker = () => {
    return(
        <div className="container">
            <div className="timeList">
                <UserInfo/>
                <Time/>
            </div>

            <div className="Cards"></div>
        </div>
    )
}

export default TimeTracker