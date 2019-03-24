import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Card from 'react-bootstrap/Card';
import '../styles/profile.css';

class Profile extends Component{
    render(){
        return(
            // <Card style={{ width: '18rem' }}>
            // <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            // <Card.Body>
            // <Card.Title>John</Card.Title>
            // <Card.Text>
            // Who wants to join me on LoL?
            // </Card.Text>
            // </Card.Body>
            // <ListGroup className="list-group-flush">
            //     <ListGroupItem>Age: 25-35</ListGroupItem>
            //     <ListGroupItem>Interest: Gaming, chilling</ListGroupItem>
            //     <ListGroupItem>Profession: Developer</ListGroupItem>
            // </ListGroup>
            // </Card>
            <p>Profile Page</p>
        )
    }
}

export default Profile;
