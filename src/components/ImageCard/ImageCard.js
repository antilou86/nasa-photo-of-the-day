import React from "react";
import Iframe from 'react-iframe';
import Description from "./Description/Description.js";


function ImageCard(props) {
const {imageData, descriptionData} = props;
console.log(props);


let checker = (value) => { 
    if (value.media_type === "video"){
    return (
        <Iframe url={value.url}
                width="800px"
                height="500px"
                display="initial"
                position="relative"
                allowFullScreen/>
    )} else {
    return (<img src={value.url} alt="a sweet pic straight from Nasa"/>)
}}    
    return (
        <div>
            {imageData && checker(imageData)}
            <Description descriptionData={descriptionData}/>
        </div>
    )}

export default ImageCard;