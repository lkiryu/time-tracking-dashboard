import React from "react";
import Ellipsis from '../../images/icon-ellipsis.svg'

const Card = (props) => {
    return (
        <div className="card">
            <div className="cardInfo">
                <div className="cardHeader">
                    <p className="cardType">{props.type}</p>
                    <img src={Ellipsis}/>
                </div>
                <p className="hours">{props.hours}</p>
                <p className="lastWeek">{props.lastweek}</p>
            </div>
        </div>
    )
}

export default Card