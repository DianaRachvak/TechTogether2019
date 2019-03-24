// import React, { Component } from 'react'
// import { Grid, Menu, Segment } from 'semantic-ui-react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import MatchingPage from './matchingpage';
// import HomePage from '../components/homepage';

// export default class MenuOnLeft extends Component {
//   state = { activeItem: 'homepage' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Router>
//         <Grid>
//           <Grid.Column width={4}>
//             <Menu fluid vertical tabular>
//               <Menu.Item
//                 //as={Link} 
//                 name='home'
//                 //to='homepage'
//                 active={activeItem === 'home'}
//                 onClick={this.handleItemClick}
//                 //<Link to={"/homepage"}>Home< /Link>
//               />
//               {/* <Menu.Item
//                 name='profile'
//                 active={activeItem === 'profile'}
//                 onClick={this.handleItemClick}
//               /> */}
//               <Menu.Item
//                 name='login'
//                 active={activeItem === 'login'}
//                 onClick={this.handleItemClick}
//               />
//               <Menu.Item
//                 name='survey'
//                 active={activeItem === 'survey'}
//                 onClick={this.handleItemClick}
//               />
//             </Menu>
//           </Grid.Column>

//           <Grid.Column stretched width={12}>
//             <Segment>
//               This is an stretched grid column. 
//               This segment will always match the tab height
//             </Segment>
//           </Grid.Column>
//         </Grid>
//       </Router>
//     )
//   }
// }

import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}