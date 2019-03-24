import React, { Component } from 'react';
import image from './image/image1.jpg';
import Grid from '@material-ui/core/Grid';
import { Card, Image, Container } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect, Link} from 'react-router-dom';

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
          <h2>Top Matches</h2>
          <Grid container spacing={24}>
            <Grid item md={4}>
            <Card>
             <Card.Content>
               <img src={image} />
               <Card.Header><strong>Steve</strong></Card.Header>
               <Card.Meta>He has matched with you!</Card.Meta>
               <Card.Description>
                 Do you want to accept chatting with <strong>Steve</strong>?
               </Card.Description>
             </Card.Content>
             <p></p>
             <Card.Content extra>
               <div className='ui two buttons'>
               <Button variant="outlined" size="medium" >
                 LIKE
               </Button >
               <Link to="/approvedDialogue">
                 <Button variant="outlined" size="medium" >
                   Approve
                 </Button >
                 </Link>
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
               <img src={image}/>
               <Card.Header><strong>Andrew</strong></Card.Header>
               <Card.Meta>He has matched with you!</Card.Meta>
               <Card.Description>
                 Do you want to accept chatting with <strong>Andrew</strong>?
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
             <p></p>
               <div className='ui two buttons'>
                 <Button variant="outlined" size="medium" >
                   LIKE
                 </Button >
                 <Link to="/approvedDialogue">
                 <Button  variant="outlined" size="medium">
                   Approve
                 </Button>
                 </ Link>
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
               <img src={image}/>
               <Card.Header><strong>David</strong></Card.Header>
               <Card.Meta>He has matched with you!</Card.Meta>
               <Card.Description>
                 Do you want to accept chatting with <strong>David</strong>?
               </Card.Description>
             </Card.Content>
             <p></p>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button variant="outlined" size="medium" >
                   LIKE
                 </Button >
                 <Link to="/approvedDialogue">
                  <Button  variant="outlined" size="medium">
                    Approve
                  </Button>
                 </Link>
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
