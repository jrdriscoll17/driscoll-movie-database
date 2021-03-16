import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Movies from './components/movies/Movies';
import NavBar from './components/nav/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './util/theme';
import store from './store';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
