import React from "react";

import './card.css'

export const Card = props => {

    return(
    <div className="card-container"> 
        <img 
            alt='criminal'
            src={`https://robohash.org/${props.criminal.id + 2}?set=set2&size=180x180`}
        />
        <h1 className="criminal"> {props.criminal.name} </h1>
        <h1 className="criminal"> {props.criminal.email} </h1>
    </div>
    )
}