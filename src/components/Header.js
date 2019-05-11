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
// const ListItem = styled.li`
//   display: inline;
//   padding: 10px;
//   background: #ffe5e5;
//   border-radius: 5px;
//   margin: 2px;
// `

const List = styled.div`
  padding-bottom: 20px;
`

const Header = () => (
    <div>
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
    </div>
  );

export default Header;