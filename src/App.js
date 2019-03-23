import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './menu/admin';

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
        <Admin/>
      </div>
    );
  }
}

export default App;
