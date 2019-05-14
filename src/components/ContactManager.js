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
class ContactManager extends React.Component {
  state = {
    open: true,
  }

  handleOpen = () => this.setState({open: true})
  handleClose = () => this.setState({open: false})

  render() {
    return(
      <div>
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
            <Label>React Context API</Label>
            <Label>Semantic UI</Label>

          </Wrapper>

          <p style={{textAlign: 'center', fontSize: '20px', paddingTop: '40px'}}><StyledLink href="https://github.com/hannahsohkim/contact-manager" target="_blank" rel="noopener noreferrer">GITHUB REPO</StyledLink></p>
        </Header.Content>
        <Modal.Content>
        <p style={{textAlign: 'center', paddingBottom: '25px', marginRight:'50px', marginLeft: '50px', fontSize: '15px'}}>A simple contact management app that allows a user to view all contacts, add a new contact, edit an existing contact, and delete a contact. I created this project to experiment with React's Context API as a state management solution and to play with Semantic UI's styling. The add, delete, and edit functionalities all have a pop up modal.</p>
        <hr />

          <StyledImage alt="Contact Manager" src={require('../assets/contactmanager.jpg')} />
          <Modal.Description>

          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
      </div>
    )
  }
}

export default ContactManager;