
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { Component } from 'react';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './profile';
import MatchingPage from './matchingpage';
import Icebreakers from './icebreakers';

export default class Menu extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="profile">
                            <NavItem eventKey="profile">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Profile
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="matchingpage">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                  Matching
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="icebreakers">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Icebreakers
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/profile" exact component={props => <Profile />} />
                        <Route path="/matchingpage" component={props => <MatchingPage />} />
                        <Route path="/icebreakers" component={props => <Icebreakers />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>
    )
  }
}