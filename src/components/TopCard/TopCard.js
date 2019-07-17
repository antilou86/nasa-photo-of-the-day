import React from "react";

function TopCard(props) {
const {dateData} = props
    return (
        <div>
            <img alt="Nasa Logo" src="https://api.nasa.gov/images/logo.png"/>
            <h1>Image of The Day</h1>
            <h3>{dateData}</h3>
        </div>
    );
}


export default TopCard;