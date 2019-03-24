    
import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import LoginPage from './components/login';
import MatchingPage from './components/matchingpage';
import HomePage from './components/homepage';
import MenuOnLeft from './components/menuList';
import { BrowserRouter as Router} from 'react-router-dom';

class Routes extends Component {
	render() {
		return (
            <Router>
                <Route exact path='/menuList' component={MenuOnLeft}/>
                <Route path='/homepage' component={HomePage}/>                
                <Route path='/login' component={LoginPage}/>
                <Route path='/matchingpage' component={MatchingPage}/>
            </Router>
		);
	}
};

export default Routes;