import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`

const Life = () => (
  <Wrapper>
    <p>Here's a glimpse into my life through pictures!</p>
    <Card.Group>
      <Card>
      <Image fluid src={require('../assets/sunny.jpg')} />
      <Card.Content>
        <Card.Meta>One of my dogs, Sunny!</Card.Meta>
        <Card.Description>I adopted Sunny in 2016. He actually became a popular meme (the dog who slept through his phsyics exam).</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image src={require('../assets/cece.jpg')} />
      <Card.Content>
        <Card.Meta>My other dog, Cece!</Card.Meta>
        <Card.Description>We adopted Cece a couple months before Sunny. She was an abandoned puppy on a farm in Central Cal.</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/hannahgrad.jpg')} />
      <Card.Content>
        <Card.Meta>Graduating from UC Berkeley</Card.Meta>
        <Card.Description>I'm technically part of the Class of 2018, but I graduated a semester early in 2017! I received a Bachelors in Cognitive Science.</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/austin.jpg')} />
      <Card.Content>
        <Card.Meta>My favorite place with my partner</Card.Meta>
        <Card.Description>One of my favorite places in Oakland is Lake Merritt. I love to come here with a blanket and some snacks during sunset, or take a walk around the lake with our dogs!</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/sis.jpg')} />
      <Card.Content>
        <Card.Meta>My sister and I.</Card.Meta>
        <Card.Description>I have one younger sister, Grace. We're really different (she's actually in Sales!) but I love her and I'm always learning from her.</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/hike.jpg')} />
      <Card.Content>
        <Card.Meta>Hiking in Peru</Card.Meta>
        <Card.Description>I love being active, either hiking outdoors or hitting the gym. I try to explore new fitness activities such as rock climbing, yoga, and boxing.</Card.Description>
      </Card.Content>
     </Card>
    </Card.Group>
  </Wrapper>
)

export default Life;