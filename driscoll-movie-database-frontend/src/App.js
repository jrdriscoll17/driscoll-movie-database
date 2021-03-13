import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MovieConatiner from './components/movies/MovieConatiner';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <MovieConatiner />
    </Router>
  );
}

export default App;
