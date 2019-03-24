
import React, { Component } from "react";
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, MDBNavLink} from 'mdbreact';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            //loginStatus: 'Login', // either login or logout
            //authRoute: '/login', // either jump to login or logout route.
            //display : 'hidden',
        };

    };

    handleOnClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    };

    render(){
        return (
            <Navbar color='#84C1FF' dark expand="md" scrolling>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.handleOnClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem>
                            <Link to="/matchingpage"><strong>Best Matches</strong></Link>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                      <NavItem>
                          <Link to="/icebreakers"><strong>Icebreakers</strong></Link>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
