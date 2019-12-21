import React from "react";
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    background-color: #afb8c7;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
    padding-top: 10px;
    display: flex;

    @media (max-width: 700px) {
        flex-direction: column;
        min-width: 300px;
    }
`;
const TitleWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-family: gothic;
    font-size: 20px;
`;
const BigH1 = styled.h1`
    font-size: 40px;
    font-family: sans-serif;
    flex-flow: row, wrap;
    margin-top:70px;
    
    @media (max-width: 900px) {
        font-size: 30px;
    }
    @media (max-width: 700px) {
        margin-top: 20px;
    }
   
`;

const Logo = styled.img`
    width:30%;
    height: auto;
    margin-left:20px;
    @media (max-width: 700px) {
        margin: 0 auto;
    }
    `;

function TopCard(props) {
    
const {dateData} = props
    return (
        <HeaderWrapper>
            <Logo alt="Nasa Logo" src="https://api.nasa.gov/images/logo.png"/>
            <TitleWrapper>
                <BigH1>Image of The Day</BigH1>
                <h3>{dateData}</h3>
            </TitleWrapper>
        </HeaderWrapper>
    );
}


export default TopCard;