import React from "react";
// import japan from "../src/img/japan.png"
import '../src/Card.css'
import pin from "../src/img/location-pin.png"


const Card = (props) => {
    return (
        <div>
            <body className="card-body">
                <img src={props.imageUrl} alt="card-image" className="card-img"></img>

                <div className="card-details">

                    <div className="card-location">
                        <div className="card-location-pin">
                            <img src={pin}></img>
                            <h3>{props.location}</h3>
                        </div>

                        <a href={props.googleMapsUrl} target="_blank">  <p>View on Google Maps</p></a>

                    </div>

                    <h1 className="card-destination">{props.title}</h1>

                    <div className="card-info">
                        <p> Dates</p>
                        <p className="card-info-text"> {props.description}</p></div>

                </div>

            </body>
            <hr></hr>
        </div>

    )
}

export default Card;