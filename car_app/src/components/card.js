import React from "react";

export default function Cards(props){
    return(
        <span className="card">
            <img src={`${props.img}`}id="car-image" alt={`${props.title}`}/>
            <div id="car-db">
            <h3 id="name">{props.title}</h3>
            <span id="production-year">{props.start_production}</span>
            </div>
            <span id="car-class">{props.class}</span>
            <hr></hr>
            <div id="last-part">
                <button id="submit" type="submit">Rent now</button>
            </div>
        </span>
    )
}