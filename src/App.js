import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login'


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
         <LoginPage />
      </div>
    );
  }
}

export default App;
