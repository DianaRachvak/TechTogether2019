import { Redirect, Link} from 'react-router-dom';
import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../styles/login.css';
import Header from './navbar';

class Login extends Component{
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/menuList'/>
    }
  }


  render(){
    return(
        <div className="loginBox parallax-visual">
          <MDBContainer className="d-flex justify-content-center">
                  <MDBRow>
                      <MDBCol>
                          <MDBCard>
                              <MDBCardBody className="mx-4">
                                  <div className="text-center">
                                      <h3 className="dark-grey-text mb-5">
                                          <strong>Sign in</strong>
                                      </h3>
                                  </div>
                              <MDBInput
                              label="Your email"
                              group
                              type="email"
                              validate
                              error="wrong"
                              success="right"
                              //onChange={this.handleEmailChange}
                              />
                              <MDBInput
                              label="Your password"
                              group
                              type="password"
                              validate
                              containerClass="mb-0"
                              //onChange={this.handlePasswordChange}
                              />
                              <div className="text-center mb-1">
                              <Link to="/menuList">
                              <MDBBtn
                              type="button"
                              gradient="blue"
                              rounded
                              className="btn-block z-depth-1a"
                              //onClick={this.handleSubmit}
                              >Sign in
                              </MDBBtn>
                              </Link>
                              <br />
                              <Link to="/survey">
                              <MDBBtn
                              type="button"
                              gradient="blue"
                              rounded
                              className="btn-block z-depth-1a"
                              //onClick={this.handleSubmit}
                              >Sign Up
                              </MDBBtn>
                              </Link>
                          </div>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
    </div>
    )
  }
}
export default Login;
