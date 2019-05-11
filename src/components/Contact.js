import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  text-align: center;
  padding-top: 50;
  margin-right: 25%;
  margin-left: 25%;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  &:focus, &:hover {
    color: #2F4F4F
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <p>I'm open to any location and I would love to chat about any opportunity you may have! Feel free to email me at
        <StyledLink href="mailto:hannahsohkim@gmail.com" target="_blank" rel="noopener noreferrer">
          <strong> hannahsohkim@gmail.com </strong>
        </StyledLink>
        or connect with me on any platforms below.
      </p>
    </Wrapper>
  )
}

export default Contact;
