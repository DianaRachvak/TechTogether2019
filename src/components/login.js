// import React, { Component } from 'react';


// class LoginPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: 'geek',
//       password: '123',
//       error: '',
//     };

//     this.handlePassChange = this.handlePassChange.bind(this);
//     this.handleUserChange = this.handleUserChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.dismissError = this.dismissError.bind(this);
//   }

//   dismissError() {
//     this.setState({ error: '' });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();

//     if (!this.state.username) {
//       return this.setState({ error: 'Username is required' });
//     }

//     if (!this.state.password) {
//       return this.setState({ error: 'Password is required' });
//     }

//     return this.setState({ error: '' });
//   }

//   handleUserChange(evt) {
//     this.setState({
//       username: evt.target.value,
//     });
//   };

//   handlePassChange(evt) {
//     this.setState({
//       password: evt.target.value,
//     });
//   }

//   render() {
//     // NOTE: I use data-attributes for easier E2E testing
//     // but you don't need to target those (any css-selector will work)

//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           {
//             this.state.error &&
//             <h3 data-test="error" onClick={this.dismissError}>
//               <button onClick={this.dismissError}>✖</button>
//               {this.state.error}
//             </h3>
//           }
//           <label>User Name</label>
//           <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

//           <label>Password</label>
//           <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

//           <input type="submit" value="Log In" data-test="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginPage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import { Link } from '@material-ui/core';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const styles = theme => createStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: '1'
  },
  formContainer: {
    maxWidth: '400px',
    height: '400px',
    padding: '32px',
    display: 'flex',
    alignItems: 'center'
  },
  loginForm: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '85%'
  },
  formHeader: {
    textAlign: 'center',
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  formButton: {
    margin: '16px auto',
    width: '30%'
  }
});

class LoginPage extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Perky Geek
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.content}>
          <Paper elevation={1} className={this.props.classes.formContainer}>
            <form className={this.props.classes.loginForm} onSubmit={this.props.logMeIn}>
              <Typography variant="h4" color="inherit" className={this.props.classes.formHeader}>
                Log in
              </Typography>
              <TextField
                required
                id="outlined-email-input"
                label="Email"
                className={this.props.classes.textField}
                type="email"
                name="email"
                //autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                className={this.props.classes.textField}
                type="password"
                //autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <Button type="submit" variant="contained" color="primary" className={this.props.classes.formButton}>
                Log in
              </Button>

              <Link to={"/homepage"} > Sign up </Link>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);