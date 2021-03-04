import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import NavBar from './components/NavBar';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

//MUI
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/login' component={login} />
            <Route exact path='/signup' component={signup} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
