import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' />
      </Switch>
    </Router>
  );
}

export default App;
