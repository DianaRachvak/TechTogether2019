import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import icebreakersImg2 from './image/icebreakersImg2.jpg';
import '../styles/icebreakers.css';

export default class Icebreakers extends Component {

    render() {
      return (
        <Container >
        <ListGroup style={{ maxWidth: '80%', marginTop: '7%', paddingLeft:'20%'}}>
          <Card>
            <Card.Body>
            <Card.Title>The 5 THINGS IN COMMON INCEBREAKERS</Card.Title>
            <Card.Text>Find the common things with people when meeting with new people</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <Card.Title>DONT'S DO ALL THE TAKING</Card.Title>
            <Card.Text>Some people get nervous and start talking non-stop. Listing is also import</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <Card.Title>TALK ABOUT INTEREST</Card.Title>
            <Card.Text>It can be your hobby, favorite moview, music ect</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <Card.Title>LET THE REAL YOU SHINE</Card.Title>
            <Card.Text>Show you are geunine, authentic person. Work in humor if you can </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <Card.Title>BE CREATIVE AND POST A RIGHT QUESTION</Card.Title>
            <Card.Text>If you want to be among the chosen few who get a reply, catching her eye is essential</Card.Text>
            </Card.Body>
          </Card>
        </ListGroup>
        </Container>
      )
    }
}
