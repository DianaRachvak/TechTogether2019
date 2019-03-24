import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../styles/login.css';

class Login extends Component{
  render(){
    //let { from } = this.props.location.state || { from: { pathname: "/" } };
    //let { redirectToReferrer } = this.state;

    //if (redirectToReferrer) return <Redirect to={from} />;
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
                            <div className="text-center mb-3">
                            <MDBBtn
                            type="button"
                            gradient="blue"
                            rounded
                            className="btn-block z-depth-1a"
                            //onClick={this.handleSubmit}
                            >Sign in
                            </MDBBtn>
                        </div>
                        </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                        <Link className="blue-text ml-1" to={"./survey"}>Try out this personality quiz!</Link>
                    </p>
                    </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
    )
}
}


export default Login;
