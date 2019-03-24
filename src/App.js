import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
<<<<<<< HEAD
import LoginPage from './components/login'

=======
import MenuOnLeft from './components/menuList';
import LoginPage from './components/login';
import MatchingPage from './components/matchingpage';
import Survey from './components/survey';
>>>>>>> 2deedc60deaf3fd4c0c3f1147fe1d7047ef17590

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
<<<<<<< HEAD
         <LoginPage />
=======
         <Routes />
        <MatchingPage />
        <MenuOnLeft />
        //<LoginPage />
        <Survey />
>>>>>>> 2deedc60deaf3fd4c0c3f1147fe1d7047ef17590
      </div>
    );
  }
}

export default App;
