import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: #afb8c7;
    padding-bottom: 20px;
    color: #1a222e;

    @media (max-width: 700px) {
        min-width: 300px;
    }
`;
const StyledP = styled.p `
    font-family: sans-serif;
    margin: 20px 40px;
`


const Description = (props) => (
  <StyledDiv>
    <Container textAlign='left'>
      
      <b><br/><br/> Find this interesting? Learn more below.</b>
      <Divider />
      <StyledP>{props.descriptionData}</StyledP>
    </Container>
  </StyledDiv>
)

export default Description