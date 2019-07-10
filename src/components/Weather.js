import React from 'react';
import { Modal, Header, Label, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  margin: 30px;
  color: #696969;
  &:focus, &:hover {
    color: #434343
    text-shadow: 1px 1px 1px #ccc;
  };
`
const Wrapper = styled.div`
  text-align: center
`

const StyledImage = styled(Image)`
  padding-bottom: 40px;
  display: block;
  margin: 0 auto;
`
class Weather extends React.Component {
  state = {
    open: true,
  }

  handleOpen = () => this.setState({open: true})
  handleClose = () => this.setState({open: false})

  render() {
    return(
      <div>
      <Modal
        open={this.state.open}
        onClose={this.handleClose && this.props.toggle}
        closeIcon>
        <Header style={{fontSize: '30px', textAlign: 'center'}}>WEATHER APP</Header>
        <Header.Content>
          <Wrapper>
            <Label>Javascript</Label>
            <Label>React.js</Label>
            <Label>Styled Components</Label>
            <Label>Axios</Label>
            <Label>Heroku</Label>
            <Label>MetaWeather API</Label>
          </Wrapper>

          <p style={{textAlign: 'center', fontSize: '20px', paddingTop: '40px'}}>
            <StyledLink href="https://github.com/hannahsohkim/hannah-weather-app" target="_blank" rel="noopener noreferrer"><strong>GITHUB REPO</strong></StyledLink>
            <StyledLink href="https://hannah-weather-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><strong>LIVE DEMO</strong></StyledLink>
          </p>
        </Header.Content>
        <Modal.Content scrolling>
          <p style={{textAlign: 'center', paddingBottom: '25px', marginRight:'50px', marginLeft: '50px', fontSize: '15px'}}>This weather app utilizes React and the MetaWeather API to allow users to input a city and display the current day's weather. All styling was done with styled components and flexbox to create a responsive web app. Users can filter between viewing the temperatures in Fahrenheit or Celcius.</p>
          <br/>
          <hr />

          <StyledImage alt="Weather App" src={require('../assets/weather.jpg')} />
          <p style={{textAlign: 'center', color: 'gray'}}> ------------------------------------------------- </p>
          <StyledImage alt="Weather App" src={require('../assets/min-weather-app.jpg')} />
        </Modal.Content>
      </Modal>
      )
    </div>
    )
  }
}

export default Weather;