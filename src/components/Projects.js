import React from 'react';
import styled from 'styled-components';
import { Label, Card, Image } from 'semantic-ui-react'

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  &:focus, &:hover {
    color: #2f4f4f
    text-shadow: 1px 1px 1px #ccc;
  }
  padding: 10px;
`

const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px
`
// const List = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-flex-flow: row wrap;
//   justify-content: space-around;
// `

// const ListItem = styled.li`
//   margin-top: 20px;
//   text-align: center;
//   margin-bottom: 20px
// `;

const StyledImage = styled(Image)`
  padding-bottom: 40px;
  padding-top: 10px
`

// const Image2 = styled.img`
//   width: 600px;
//   height: 400px;
//   padding-top: 30px
//   padding-bottom: 50px
// `
// const Image3 = styled.img`
//   width: 650px;
//   height: 400px;
//   padding-top: 30px
//   padding-bottom: 50px;

// `
const Intro = styled.p`
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 18px
`

const Wrapper = styled.div`
  padding-bottom: 20px
`


const Projects = () => (
  <Container>
    <Intro>Here are some applications I've worked on!</Intro>
    <Card.Group className='ui three cards'>
      <Card style={{width: '700px', height: '800px'}}>
        <Card.Header><strong>BOOKSHELF</strong></Card.Header>
        <Card.Content>
        <Wrapper>
        <Label>React.js</Label>
          <Label>Node.js</Label>
          <Label>Express</Label>
          <Label>MySQL</Label>
          <Label>Jest</Label>
          <Label>Enzyme</Label>
        </Wrapper>
        <StyledImage className="ui large" alt="Bookshelf" src={require('../assets/bookshelf.jpg')} />
        <Card.Meta><StyledLink href="https://github.com/hannahsohkim/Bookshelf-Reviews" target="_blank" rel="noopener noreferrer">GITHUB REPO</StyledLink></Card.Meta>
        <br/>
        <Card.Description>Bookshelf is a social catalogue and database for books. Users can review and rate books, find books or authors, and interact with one another. I was tasked with the reviews service, a full stack microservice that leverages React to conditionally render and filter reviews by rating. At the end, my team members and I brought together our individual microservices into an integrated applicaton.</Card.Description>
        </Card.Content>
      </Card>

      <Card style={{width: '700px', height: '800px'}}>
        <Card.Header><strong>BANDLAND</strong></Card.Header>
        <Card.Content>
        <Wrapper>
          <Label>Node.js</Label>
          <Label>Express</Label>
          <Label>PostgreSQL</Label>
          <Label>Artillery</Label>
        </Wrapper>
        <Image alt="Bandland" src={require('../assets/bandland.jpg')} />
        <Card.Meta><StyledLink href="https://github.com/hannahsohkim/Bandland-Recommended" target="_blank" rel="noopener noreferrer">GITHUB REPO</StyledLink></Card.Meta>
        <br/>

        <Card.Description>Bandland is a platform for artists to share their music and for fans to discover new music and support their favorite artists. I was tasked with taking a legacy codebase and reworking the backend to handle higher traffic and data. I tested and benchmarked two databases, PostgreSQL and Cassandra, and decided to redesign the backend using PostgreSQL. I generated and seeded 10M+ records, optimized query times to be under 1ms, and stress tested the app to handle 1000 requests per second.</Card.Description>
        </Card.Content>
      </Card>


      <Card style={{width: '700px', height: '800px'}}>
        <Card.Header><strong>CONTACT MANAGER</strong></Card.Header>
        <Card.Content>
        <Wrapper>
          <Label>React.js</Label>
          <Label>React Context API</Label>
          <Label>Semantic UI</Label>
        </Wrapper>
        <StyledImage alt="Contact Manager" src={require('../assets/contactmanager.jpg')} />
        <Card.Meta><StyledLink href="https://github.com/hannahsohkim/contact-manager" target="_blank" rel="noopener noreferrer">GITHUB REPO</StyledLink></Card.Meta>
        <br/>

        <Card.Description>A simple contact management app that allows a user to view all contacts, add a new contact, edit an existing contact, and delete a contact. I created this project to experiment with React's Context API as a state management solution and to play with Semantic UI's styling. The add, delete, and edit functionalities all have a pop up modal.</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
)


export default Projects;