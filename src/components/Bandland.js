import React from 'react';
import { Modal, Header, Label, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
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
class Bandland extends React.Component {
  state = {
    open: true,
  }

  handleOpen = () => this.setState({open: true})
  handleClose = () => this.setState({open: false})

  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={this.handleClose && this.props.toggle}
        closeIcon
      >
        <Header style={{fontSize: '30px', textAlign: 'center'}}>BOOKSHELF</Header>
        <Header.Content>
          <Wrapper>
            <Label>Node.js</Label>
            <Label>Express</Label>
            <Label>PostgreSQL</Label>
            <Label>Artillery</Label>

          </Wrapper>

          <p style={{textAlign: 'center', fontSize: '20px', paddingTop: '40px'}}><StyledLink href="https://github.com/hannahsohkim/Bandland-Recommended" target="_blank" rel="noopener noreferrer"><strong>GITHUB REPO</strong></StyledLink></p>
        </Header.Content>
        <Modal.Content>
        <p style={{textAlign: 'center', paddingBottom: '25px', marginRight:'50px', marginLeft: '50px', fontSize: '15px'}}>Bandland is a platform for artists to share their music and for fans to discover new music and support their favorite artists. I was tasked with taking a legacy codebase and reworking the backend to handle higher traffic and data. I tested and benchmarked two databases, PostgreSQL and Cassandra, and decided to redesign the backend using PostgreSQL. I generated and seeded 10M+ records, optimized query times to be under 1ms, and stress tested the app to handle 1000 requests per second.</p>
        <hr />
        <br />

          <StyledImage alt="Bandland" src={require('../assets/bandland.jpg')} />
          <StyledImage alt="Bandland" src={require('../assets/postgres.jpg')} />
          <StyledImage alt="Bandland" src={require('../assets/cassandra.jpg')} />
          <Modal.Description>

          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
  }
}

export default Bandland;