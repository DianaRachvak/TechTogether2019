
import React, { Component } from "react";
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, MDBNavLink} from 'mdbreact';
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };

    };

    handleOnClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    };

    render(){
        return (
            <Navbar color='#212121' dark expand="md" scrolling>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.handleOnClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem>
                            <Link to="/matchingpage"><strong>Best Matches</strong></Link>
                        </NavItem>
                        </NavbarNav>
                        <Link to="/">Perky Geeks</Link>

                    <NavbarNav right>
                      <NavItem>
                          <Link to="/icebreakers"><strong>Icebreakers</strong></Link>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
} export default Header;
