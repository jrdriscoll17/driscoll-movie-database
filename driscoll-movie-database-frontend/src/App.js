import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Home from './components/Home';
import Movies from './components/movies/Movies';
import NavBar from './components/nav/NavBar';
import theme from './util/theme';
import store from './store';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies' component={Movies} />
        </Switch>
      </Provider>
    </ThemeProvider>
  );
}
