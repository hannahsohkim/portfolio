import React from 'react';
import { Card, Image } from 'semantic-ui-react';



const Life = () => (
  <div>
    <p>Here's a glimpse into my life through pictures!</p>
    <Card.Group>
      <Card>
      <Image fluid src={require('../assets/sunny.jpg')} />
      <Card.Content>
        <Card.Meta>One of my dogs, Sunny!</Card.Meta>
        <Card.Description>I adopted Sunny in 2016. He actually became a popular meme (the dog who slept through his phsyics exam)!</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/cece.jpg')} />
      <Card.Content>
        <Card.Meta>My other dog, Cece!</Card.Meta>
        <Card.Description>We adopted Cece a couple months before Sunny. She was an abandoned dog on a farm.</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/hannahgrad.jpg')} />
      <Card.Content>
        <Card.Meta>Graduating from UC Berkeley</Card.Meta>
        <Card.Description>I was part of the Class of 2018, but I graduated a semester early in 2017.</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/austin.jpg')} />
      <Card.Content>
        <Card.Meta>My favorite place with my partner</Card.Meta>
        <Card.Description>One of my favorite places in Oakland is Lake Merrit. I love coming here with a blanket and some snacks during sunset!</Card.Description>
      </Card.Content>
     </Card>

     <Card>
      <Image fluid src={require('../assets/sis.jpg')} />
      <Card.Content>
        <Card.Meta>My sister and I.</Card.Meta>
        <Card.Description>I have one younger sister, Grace. We're only a year apart!</Card.Description>
      </Card.Content>
     </Card>

    </Card.Group>


  </div>
)

export default Life;