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
import { Redirect, Link } from 'react-router-dom'
import HomePage from './homepage';
import { BrowserRouter as Router, Route} from 'react-router-dom'

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
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/menuList'/>
    }
  }


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
        <br />
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
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                className={this.props.classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <div className={this.props.classes.formButton}>
                {this.renderRedirect()}
                <Button type="submit" variant="contained" color="primary"
                 onClick={this.setRedirect} 
                 marginleft="30">Log In</Button>
              </div>
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