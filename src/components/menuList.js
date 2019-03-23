import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import { MatchingPage } from './components/matchingpage';

export default class MenuOnLeft extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                as={Link} to='/homepage'
                name='Home'
                active={activeItem === 'homepage'}
                onClick={this.handleItemClick}
                //<Link to={"/homepage"}>Home< /Link>
                //<Link to="/react">React</Link>
              />
              <Menu.Item
                as={Link} to='/profile'
                name='Profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link} to='/tips'
                name='Tips'
                active={activeItem === 'tips'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link} to='/matchingpage'
                name='Match'
                active={activeItem === 'MatchingPagee'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              This is an stretched grid column. 
              This segment will always match the tab height
            </Segment>
          </Grid.Column>
        </Grid>
      </Router>
    )
  }
}