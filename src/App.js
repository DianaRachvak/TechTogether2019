import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/menuList';
import MatchingPage from './components/matchingpage';
import Profile from './components/profile'
import Survey from './components/survey'
import Header from './components/navbar'
<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
=======
import Icebreakers from './components/icebreakers'
import Dialogue from './components/approvedDialogue'
>>>>>>> f991b28ff255bc55034d0f7b2fd5f7a7b02135bf

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
           <Header />
           <div>
            <Route exact path='/' component={LoginPage}/>
            <Route path="/profile" component={Profile} />
            <Route path='/menuList' component={Menu}/>
            <Route path='/matchingpage' component={MatchingPage}/>
            <Route path='/icebreakers' component={Icebreakers}/>
            <Route path="/survey" component={Survey} />
            <Route path="approvedDialogue" component={Dialogue} />
           </div>
         </Router>
      </div>
    );
  }
}

export default App;
