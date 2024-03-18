import React from "react";
import UserInfo from "../userInfo/userInfo";
import Time from "../time/time";
import Card from "../card/card";

import "./timeTracker.css"

const TimeTracker = () => {
    return(
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo/>
                <Time/>
            </div>

            <div className="Cards">
                <Card/>
                <Card/>
                <Card/>
                <Card type='home' hours='12' lastweek='20'/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default TimeTracker