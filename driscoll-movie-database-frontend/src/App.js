import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={home}>
            Home
          </Route>
          <Route exact path='/login' component={login}>
            Login
          </Route>
          <Route exact path='/signup' component={signup}>
            Sign Up
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
