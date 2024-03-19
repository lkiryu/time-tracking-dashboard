import React from "react";
import './time.css'

const Time = () => {
    return (
        <div className="time">
            <ul>
                <li>Daily</li>
                <li className="active">Weekly</li>
                <li>Monthly</li>
            </ul>
        </div>
    )
}

export default Time