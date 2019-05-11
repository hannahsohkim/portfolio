import React from 'react';
import { Table, Icon } from 'semantic-ui-react'

const Home = () => {
  return (
    <div>
      <p>Hello, my name is Hannah! I am a full stack developer based in San Jose, CA but definitely open to relocating for the right opportunity. I am currently looking for a Full Stack Developer or Front End Engineer role.</p>
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