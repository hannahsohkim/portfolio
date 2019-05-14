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

class Bookshelf extends React.Component {
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
          <Label>React.js</Label>
            <Label>Node.js</Label>
            <Label>Express</Label>
            <Label>MySQL</Label>
            <Label>Jest</Label>
            <Label>Enzyme</Label>
          </Wrapper>

          <p style={{textAlign: 'center', fontSize: '20px', paddingTop: '40px'}}><StyledLink href="https://github.com/hannahsohkim/Bookshelf-Reviews" target="_blank" rel="noopener noreferrer"><strong>GITHUB REPO</strong></StyledLink></p>
        </Header.Content>
        <Modal.Content>
        <p style={{textAlign: 'center', paddingBottom: '25px', marginRight:'50px', marginLeft: '50px', fontSize: '15px'}}>Bookshelf is a social catalogue and database for books. Users can review and rate books, find books or authors, and interact with one another. I was tasked with the reviews service, a full stack microservice that leverages React to conditionally render and filter reviews by rating. At the end, my team members and I brought together our individual microservices into an integrated applicaton.</p>
        <hr />

          <StyledImage className="ui large" alt="Bookshelf" src={require('../assets/bookshelf2.jpg')} />
          <StyledImage className="ui medium" alt="Bookshelf" src={require('../assets/bookshelf.jpg')} />
          <Modal.Description>

          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
  }
}

export default Bookshelf;