import React from "react";
import UserInfo from "../userInfo/userInfo";
import Time from "../time/time";

import "./timeTracker.css"

const TimeTracker = () => {
    return(
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo/>
                <Time/>
            </div>

            <div className="Cards"></div>
        </div>
    )
}

export default TimeTracker