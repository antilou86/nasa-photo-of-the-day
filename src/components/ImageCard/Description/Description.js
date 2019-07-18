import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 80%;
    margin:0 auto;
    background-color: #afb8c7;
    padding-bottom: 20px;
    color: #1a222e;
`;


const Description = (props) => (
  <StyledDiv>
    <Container textAlign='left'>
      <b>Description</b>
      <Divider />
      <p>{props.descriptionData}</p>
    </Container>
  </StyledDiv>
)

export default Description