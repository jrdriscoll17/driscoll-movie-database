import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import MovieConatiner from './components/movies/MovieConatiner';
import Movies from './components/movies/Movies';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
      </Switch>
    </Router>
  );
}

export default App;
