import React, { Component } from 'react';
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';
import Grid from '@material-ui/core/Grid';
import { Card, Image, Container } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export default class MatchingPage extends Component {
    render() {
      const styles = {
        card: {
        maxWidth: 400,
      },
        button: {
          margin: 5,
          padding: 5,
        }
      };

        return (
          <Container>
          <h2>Best Matches Today</h2>
          <Grid container spacing={24}>
            <Grid item md={4}>
            <Card>
             <Card.Content>
               <img src={image1} />
               <Card.Header><strong>Steve Sanders</strong></Card.Header>
               <Card.Meta>He has matched with you!</Card.Meta>
               <Card.Description>
                 Do you want to accept dating with <strong>Steve</strong>?
               </Card.Description>
             </Card.Content>
             <p></p>
             <Card.Content extra>
               <div className='ui two buttons'>
               <Button variant="outlined" size="medium" >
                 LIKE
               </Button >
                 <Button variant="outlined" size="medium" >
                   Approve
                 </Button >
                 <Button variant="outlined" size="medium" >
                   Decline
                 </Button>
               </div>
             </Card.Content>
           </Card>

            </Grid>
            <Grid item md={4}>
            <Card>
             <Card.Content>
               <img src={image2}/>
               <Card.Header><strong>Andrew Grander</strong></Card.Header>
               <Card.Meta>He has matched with you!</Card.Meta>
               <Card.Description>
                 Do you want to accept dating with <strong>Andrew</strong>?
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
             <p></p>
               <div className='ui two buttons'>
                 <Button variant="outlined" size="medium" >
                   LIKE
                 </Button >
                 <Button  variant="outlined" size="medium">
                   Approve
                 </Button>
                 <Button variant="outlined" size="medium">
                   Decline
                 </Button>
               </div>
             </Card.Content>
           </Card>

            </Grid>
            <Grid item md={4}>
            <Card>
             <Card.Content>
               <img src={image3}/>
               <Card.Header><strong>David Sanders</strong></Card.Header>
               <Card.Meta>He has matched with you!</Card.Meta>
               <Card.Description>
                 Do you want to accept dating with <strong>David</strong>?
               </Card.Description>
             </Card.Content>
             <p></p>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button variant="outlined" size="medium" >
                   LIKE
                 </Button >
                 <Button  variant="outlined" size="medium">
                   Approve
                 </Button>
                 <Button variant="outlined" size="medium">
                   Decline
                 </Button>
               </div>
             </Card.Content>
           </Card>
            </Grid>
          </Grid>
          </Container>
        )
    }
}
