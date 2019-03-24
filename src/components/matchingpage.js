import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Card, Image } from 'semantic-ui-react'


//import { MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class MatchingPage extends Component {
    render() {
        return (
          <Grid container spacing={24}>
            <Grid item md={3}>
            
            <Card>
             <Card.Content>
               <Image src='.jpg' />
               <Card.Header>Steve Sanders</Card.Header>
               <Card.Meta>Friends of Elliot</Card.Meta>
               <Card.Description>
                 Steve wants to add you to the group <strong>best friends</strong>
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button>
                   Approve
                 </Button>
                 <Button>
                   Decline
                 </Button>
               </div>
             </Card.Content>
           </Card>

            </Grid>
            <Grid item md={3}>
            <Card>
             <Card.Content>
               <Image src='.jpg' />
               <Card.Header>Steve Sanders</Card.Header>
               <Card.Meta>Friends of Elliot</Card.Meta>
               <Card.Description>
                 Steve wants to add you to the group <strong>best friends</strong>
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button>
                   Approve
                 </Button>
                 <Button>
                   Decline
                 </Button>
               </div>
             </Card.Content>
           </Card>

            </Grid>
            <Grid item md={3}>
            <Card>
             <Card.Content>
               <Image src='.jpg' />
               <Card.Header>Steve Sanders</Card.Header>
               <Card.Meta>Friends of Elliot</Card.Meta>
               <Card.Description>
                 Steve wants to add you to the group <strong>best friends</strong>
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button>
                   Approve
                 </Button>
                 <Button>
                   Decline
                 </Button>
               </div>
             </Card.Content>
           </Card>
            </Grid>
          </Grid>
          /*  <MDBCol>

            <MDBCard style={{ width: "22rem"}}>

                <MDBCardImage className="img-fluid" src="" waves />
                <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn floating social="tw">
                    <MDBIcon fab icon="twitter" className="pr-1" />
                </MDBBtn>
                </MDBCardBody>

                <MDBCardImage className="img-fluid" src="" waves />
                <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn floating social="tw">
                    <MDBIcon fab icon="twitter" className="pr-1" />
                </MDBBtn>
                </MDBCardBody>

                <MDBCardImage className="img-fluid" src="" waves />
                <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn floating social="tw">
                    <MDBIcon fab icon="twitter" className="pr-1" />
                </MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            */

        )
    }
}

//export default MatchingPage;
