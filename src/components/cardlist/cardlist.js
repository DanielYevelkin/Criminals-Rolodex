import React from "react";
import {Card} from '../card/card'

import './cardlist.css'


export const CardList = props => {

    return(
        <div className="card-list">
            {props.criminals.map(criminal => (
                <Card key={criminal.id} criminal={criminal} />
            ))}
        </div>
    )
    
}