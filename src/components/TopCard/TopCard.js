import React from "react";
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    background-color: #afb8c7;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
    padding-top: 10px;
    display: flex;
`;
const TitleWrapper = styled.div`
    width: 80%;
    min-width: 415px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-family: gothic;
    font-size: 20px;
`;
const BigH1 = styled.h1`
    font-size: 50px;
    font-family: sans-serif;
    flex-flow: wrap;
`;

const Logo = styled.img`
    width:30%;
    min-width:213px;
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