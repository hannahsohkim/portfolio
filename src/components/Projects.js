import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react'
import Bookshelf from './Bookshelf'
import Bandland from './Bandland'
import ContactManager from './ContactManager'
import Weather from './Weather'


const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`

const Intro = styled.p`
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 18px
`

class Projects extends React.Component {
  state = {
    bookshelf: true,
    bandland: true,
    contact: true,
    weather: true
  }

  bookshelfToggle = () => {
    this.setState({
      bookshelf: !this.state.bookshelf
    })
  }

  bandlandToggle = () => {
    this.setState({
      bandland: !this.state.bandland
    })
  }

  contactToggle = () => {
    this.setState({
      contact: !this.state.contact
    })
  }

  weatherToggle = () => {
    this.setState({
      weather: !this.state.weather
    })
  }

  render () {
    const { bookshelfToggle, bandlandToggle, contactToggle, weatherToggle } = this;
    const { bookshelf, bandland, contact, weather } = this.state;

    if (!bookshelf) {
      console.log('bookshelf')
      return (
        <Bookshelf toggle={bookshelfToggle}/>
      )
    } else if (!bandland) {
      return (
        <Bandland toggle={bandlandToggle} />
      )
    } else if (!weather) {
      return (
        <Weather toggle={weatherToggle} />
      )
    } else if (!contact) {
      return (
        <ContactManager toggle={contactToggle} />
      )
    }

    return (
      <Container>
        <Intro>Here are some applications I've worked on! Please <strong><em>click</em></strong> on a project to find out more.</Intro>
        <Card.Group className='ui three cards'>
          <Card onClick={bookshelfToggle} style={{color: '#696969'}}>
            <Card.Header style={{color: '#434343'}}><strong>Bookshelf</strong></Card.Header>
            <Card.Content>
              Bookshelf is a full stack application, a social catalogue and database for books.
            </Card.Content>
          </Card>

          <Card onClick={bandlandToggle} style={{color: '#696969'}}>
            <Card.Header style={{color: '#434343'}}><strong>Bandland</strong></Card.Header>
            <Card.Content>
              Bandland is a platform for artists to share their music and for fans to support them.
            </Card.Content>
          </Card>

          <Card onClick={weatherToggle} style={{color: '#696969'}}>
            <Card.Header style={{color: '#434343'}}><strong>Weather App</strong></Card.Header>
            <Card.Content>
              United States Weather App allows users to input a city and displays weather data for the current day.
            </Card.Content>
          </Card>

          <Card onClick={contactToggle} style={{color: '#696969'}}>
            <Card.Header style={{color: '#434343'}}><strong>Contact Manager</strong></Card.Header>
            <Card.Content>
              Contact Manager is a simple management app that allows users to keep track of their contacts.
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}


export default Projects;