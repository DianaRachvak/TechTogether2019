import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import MenuOnLeft from './components/menuList';
import LoginPage from './components/login';
import MatchingPage from './components/matchingpage';
import Survey from './components/survey';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isLoggedIn: false
  //   };
  // }

  // logMeIn = () => {
  //   this.setState({isLoggedIn:true});
  //   console.log(this.state.isLoggedIn);
  // }

  render() {
    return (
      <div className="App">
         <Routes />
        <MatchingPage />
        <MenuOnLeft />
        //<LoginPage />
        <Survey />
      </div>
    );
  }
}

export default App;
