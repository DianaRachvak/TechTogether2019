import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuOnLeft from './components/menuList';
import LoginPage from './components/login';

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
        <MenuOnLeft />
        //<LoginPage />
      </div>
    );
  }
}

export default App;
