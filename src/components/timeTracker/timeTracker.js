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
                <Card type='Work' hours='32' previous='36'/>
                <Card type='Play' hours='10' previous='8'/>
                <Card type='Study' hours='4' previous='7'/>
                <Card type='Exercise' hours='4' previous='5'/>
                <Card type='Social' hours='5' previous='10'/>
                <Card type='Self Care' hours='2' previous='2'/>
            </div>
        </div>
    )
}

export default TimeTracker