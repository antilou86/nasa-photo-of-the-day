import React from "react";
import Iframe from 'react-iframe';
import Description from "./Description/Description.js";
import styled from 'styled-components'



function ImageCard(props) {
const {imageData, descriptionData} = props;

let ImageWrapper = styled.div`
    width: 90%;
    height: auto;
    background-color: #afb8c7;
    margin: 0 auto;
    overflow: hidden;

    @media (max-width: 700px) {
        min-width: 300px;
    }
`;

const testing = {
    fit:'contain', 
    display: 'initial',
    position: 'relative'  }
;

const ActualImage = styled.img`
    width: 85%;
    height: auto;
    `

let checker = (value) => { 
    if (value.media_type === "video"){
    return (
        
        <Iframe url={value.url}
                style={testing}
                allowFullScreen/>
        
    )} else {
    return (<ActualImage src={value.url} alt="a sweet pic straight from Nasa" />)
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