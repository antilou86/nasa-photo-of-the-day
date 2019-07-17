import React from "react";
import Description from "./Description/Description.js"

function ImageCard(props) {
const {imageData, descriptionData} = props;
    return (
        <div>
            <img alt="nasa image"></img>
            <Description />
        </div>
    )}

export default ImageCard;