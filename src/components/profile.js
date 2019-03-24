import React, { Component } from 'react';
import '../styles/profile.css';
import image from "./image/image2.png";
import {Container} from 'semantic-ui-react'
import ListItem from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {
    render(){
        const styles={
            image: {
                height: 200,
                width: 200,
            },
        }

        return(
            <Container style={{marginTop:'7%', paddingLeft:'20%'}}>
                <img src={image}/>
                <Grid container spacing ={12}>
                <Grid item xs={4}>
                    <ListItem>
                            <label htmlFor="formGroupExampleInput">First Name</label>
                            <input
                            type="text"
                            placeholder = "Rebecca"
                            className="form-control"
                            id="formGroupExampleInput"
                            />
                    </ListItem>
                    <ListItem>
                            <label htmlFor="formGroupExampleInput">Email</label>
                            <input
                            type="text"
                            placeholder = "Rebecca@gmail.com"
                            className="form-control"
                            id="formGroupExampleInput"
                            />
                    </ListItem>
                    <ListItem>
                            <label htmlFor="formGroupExampleInput">Three Things you love to do</label>
                            <input
                            type="text"
                            placeholder = "Sleep, Eat, Chill"
                            className="form-control"
                            id="formGroupExampleInput"
                            />
                    </ListItem>
                </Grid>
                <Grid item xs={4}>
                    <ListItem>
                            <label htmlFor="formGroupExampleInput">Last Name</label>
                            <input
                            type="text"
                            placeholder = "Watson"
                            className="form-control"
                            id="formGroupExampleInput"
                            />
                    </ListItem>
                    <ListItem>
                            <label htmlFor="formGroupExampleInput">Age</label>
                            <input
                            type="text"
                            placeholder = "22"
                            className="form-control"
                            id="formGroupExampleInput"
                            />
                    </ListItem>
                    <ListItem>
                            <label htmlFor="formGroupExampleInput">Interest</label>
                            <input
                            type="text"
                            placeholder = "Stay home"
                            className="form-control"
                            id="formGroupExampleInput"
                            />
                    </ListItem>
                </Grid>
                </Grid>
            </Container>
 /*           
<div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
                <form className="form-horizontal">
                  <div className="fieldset">
                    <div className="form-group avatar">
                      <figure className="figure col-md-2 col-sm-3 col-xs-6">
                        <img className="img-rounded img-responsive" src={avatar} alt />
                      </figure>
                    </div>
                    <div className="form-group">
                      <label className="col-md-2 col-sm-3 col-xs-6 control-label">User Name</label>
                      <div className="col-md-10 col-sm-9 col-xs-6">
                        <input type="text" className="form-control" defaultValue="Rebecca" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-2 col-sm-3 col-xs-6 control-label">First Name</label>
                      <div className="col-md-10 col-sm-9 col-xs-6">
                        <input type="text" className="form-control" defaultValue="Rebecca" />
                      </div>
                    </div>
                    <div className="fieldset">
                      <div className="form-group">
                        <label className="col-md-2  col-sm-3 col-xs-6 control-label">Email</label>
                        <div className="col-md-10 col-sm-9 col-xs-6">
                          <input type="email" className="form-control" defaultValue="Rebecca@website.com" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2  col-sm-3 col-xs-6 control-label">Three Thing you should know about me</label>
                        <div className="col-md-10 col-sm-9 col-xs-6">
                          <input type="email" className="form-control" defaultValue="Love knitting, dogs and stay home" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-10 col-sm-9 col-xs-6 col-md-push-2 col-sm-push-3 col-xs-push-0">
                        <input className="btn btn-primary" type="submit" defaultValue="Update Profile" />
                      </div>
                    </div>
                  </div></form>
              </div>
            </section>
        </div>
      </div>*/
        )
    }
}

export default Profile;