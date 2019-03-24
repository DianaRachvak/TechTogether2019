import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MenuOnLeft from './components/menuList';
import HomePage from './components/homepage';
import MatchingPage from './components/matchingpage';
import Profile from './components/profile'
import Survey from './components/survey'
import Header from './components/navbar'
import Icebreakers from './components/icebreakers'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
         <Header />
           <div>
            <Route exact path='/' component={LoginPage}/>
            <Route path="/profile" component={Profile} />
            <Route path='/menuList' component={MenuOnLeft}/>
            <Route path='/homepage' component={HomePage}/>
            <Route path='/matchingpage' component={MatchingPage}/>
            <Route path='/icebreakers' component={Icebreakers}/>
            <Route path="/survey" component={Survey} />
           </div>
         </Router>
      </div>
    );
  }
}

export default App;
