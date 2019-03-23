    
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './components/login';
import MatchingPage from './components/matchingpage';
import { BrowserRouter as Router} from 'react-router-dom'

class Routes extends Component {
	render() {
		return (
			<main>
                <Router>
                    <Switch>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/matchingpage' component={MatchingPage}/>
                    </Switch>
                </Router>
			</main>
		);
	}
};

export default Routes;