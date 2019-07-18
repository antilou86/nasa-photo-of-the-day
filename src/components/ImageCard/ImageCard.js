import React from "react";
import Iframe from 'react-iframe';
import Description from "./Description/Description.js";
import styled from 'styled-components'



function ImageCard(props) {
const {imageData, descriptionData} = props;

let ImageWrapper = styled.div`
    width: 80%;
    height: auto;
    background-color: #afb8c7;
    margin: 0 auto;
    overflow: hidden;
`;

const testing = {
    fit:'contain', 
    display: 'initial',
    position: 'relative'  }
;

let checker = (value) => { 
    if (value.media_type === "video"){
    return (
        
        <Iframe url={value.url}
                style={testing}
                allowFullScreen/>
        
    )} else {
    return (<img src={value.url} alt="a sweet pic straight from Nasa" />)
}}    
    return (
        <div>
        <ImageWrapper>
            {imageData && checker(imageData)}
        </ImageWrapper>
            <Description descriptionData={descriptionData}/>
        </div>
    )}

export default ImageCard;