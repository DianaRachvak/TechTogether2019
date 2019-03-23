import React, { Component } from 'react';
import './App.css';
import MenuOnLeft from './components/menuList';
import LoginPage from './components/login';
import MatchingPage from './components/matchingpage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  logMeIn = () => {
    this.setState({isLoggedIn:true});
    console.log(this.state.isLoggedIn);
  }

  render() {
    return (
      <div className="App">
        <MatchingPage />
        <MenuOnLeft />
        //<LoginPage />
      </div>
    );
  }
}

export default App;
