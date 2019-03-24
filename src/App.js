import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MenuOnLeft from './components/menuList';
import HomePage from './components/homepage';
import MatchingPage from './components/matchingpage';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
           <div>                         
            <Route exact path='/' component={LoginPage}/>
            <Route path='/menuList' component={MenuOnLeft}/>
            <Route path='/homepage' component={HomePage}/>     
            <Route path='/matchingpage' component={MatchingPage}/>
           </div>
         </Router>
      </div>
    );
  }
}

export default App;
