import React from "react";
import Ellipsis from '../../images/icon-ellipsis.svg'

import './card.css'

const Card = (props) => {
    return (
        <div className={'card '+props.type}>
            <div className="cardInfo">
                <div className="cardHeader">
                    <p className="cardType">{props.type}</p>
                    <img src={Ellipsis}/>
                </div>
                <p className="hours">{props.hours}hrs</p>
                <p className="lastWeek">Last Week - {props.previous}hrs</p>
            </div>
        </div>
    )
}

export default Card