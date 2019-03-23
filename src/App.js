import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Admin from './menu/admin';
=======
import MenuOnLeft from './components/menuList';
import LoginPage from './components/login';
>>>>>>> 5d8791ad54057106314525bbf257014783f0b66e

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
<<<<<<< HEAD
        <Admin/>
=======
        <MenuOnLeft />
        //<LoginPage />
>>>>>>> 5d8791ad54057106314525bbf257014783f0b66e
      </div>
    );
  }
}

export default App;
