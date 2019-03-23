import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';


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
      </div>
    );
  }
}

export default App;
