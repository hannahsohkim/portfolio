import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

const Image = styled.img`
  width: 360px;
  height: 500px;
  border-radius: 80px;
`

const Title = styled.h1`
  font-size: 45px
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #696969;
  &:focus, &:hover {
    color: #434343
    text-shadow: 1px 1px 1px #ccc;
  }
`
const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width : 768px) {
    width: 75%;
  };
  @media only screen and (min-width : 992px) {
    width: 50%;
  }
`

const List = styled.div`
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;

`

const Header = () => (
    // <div>
      <List>
      <StyledLink to="/">
        <Image alt="Profile" src={require('../assets/hannah.jpg')} />
        <Title>HANNAH KIM</Title>
      </StyledLink>
        <Button style={{backgroundColor: '#ffe5e5'}}><StyledLink to='/'>ABOUT</StyledLink></Button>
        <Button style={{backgroundColor: '#ffe5e5'}}><StyledLink to='/projects'>PROJECTS</StyledLink></Button>
        <Button style={{backgroundColor: '#ffe5e5'}}><StyledLink to='/life'>LIFE</StyledLink></Button>
        <Button style={{backgroundColor: '#ffe5e5'}}><StyledLink to='/contact'>CONTACT</StyledLink></Button>
      </List>
    // </div>
  );

export default Header;