import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
//*import LoginPage from './components/login'
import MatchingPage from './components/matchingpage'
=======
import LoginPage from './components/login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MenuOnLeft from './components/menuList';
import HomePage from './components/homepage';
import MatchingPage from './components/matchingpage';
>>>>>>> 461c16cca6ea434861a8a6ded5b66fcb1a43761d


class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
         <MatchingPage />
=======
         <Router>
           <div>                         
            <Route exact path='/' component={LoginPage}/>
            <Route path='/menuList' component={MenuOnLeft}/>
            <Route path='/homepage' component={HomePage}/>     
            <Route path='/matchingpage' component={MatchingPage}/>
           </div>
         </Router>
>>>>>>> 461c16cca6ea434861a8a6ded5b66fcb1a43761d
      </div>
    );
  }
}

export default App;
