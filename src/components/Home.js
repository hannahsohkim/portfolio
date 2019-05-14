import React from 'react';
import { Table } from 'semantic-ui-react'
import Resume from '../assets/hannah-resume.pdf';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: #2f0909;
  &:focus, &:hover {
    color: #696969
  }
`
const Home = () => {
  return (
    <div>
      <p style={{fontSize: '15px'}}>Hello, my name is Hannah! I am a <strong><em>Full Stack Developer</em></strong> based in the Bay Area, but definitely open to relocating for the right opportunity. I am currently looking for a Full Stack Developer or Front End Engineer role. Feel free to download or take a look at my resume
      <StyledLink href={Resume} target="_blank" rel="noopener noreferrer"><strong> here. </strong></StyledLink>
      </p>

      <br />
        <h3> TECHNICAL SKILLS </h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{backgroundColor: '#fcf9f7'}}>Frontend</Table.HeaderCell>
            <Table.HeaderCell style={{backgroundColor: '#fcf9f7'}}>Backend</Table.HeaderCell>
            <Table.HeaderCell style={{backgroundColor: '#fcf9f7'}}>Testing/Deployment</Table.HeaderCell>
            <Table.HeaderCell style={{backgroundColor: '#fcf9f7'}}>Build/Developer Tools</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Javascript(ES5/ES6+)</Table.Cell>
            <Table.Cell>Node.js</Table.Cell>
            <Table.Cell>Jest</Table.Cell>
            <Table.Cell>Git</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>HTML</Table.Cell>
            <Table.Cell>Express</Table.Cell>
            <Table.Cell>Enzyme</Table.Cell>
            <Table.Cell>npm</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CSS</Table.Cell>
            <Table.Cell>MySQL</Table.Cell>
            <Table.Cell>AWS (EBS, EC2, S3/Cloudfront)</Table.Cell>
            <Table.Cell>Webpack</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>React.js</Table.Cell>
            <Table.Cell>PostgreSQL</Table.Cell>
            <Table.Cell>New Relic</Table.Cell>
            <Table.Cell>Babel</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>jQuery</Table.Cell>
            <Table.Cell>MongoDB</Table.Cell>
            <Table.Cell>Artillery</Table.Cell>
            <Table.Cell>Trello</Table.Cell>
          </Table.Row>
        </Table.Body>

      </Table>
    </div>
  )
}

export default Home;