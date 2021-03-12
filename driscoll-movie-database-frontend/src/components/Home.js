import React, { Component } from 'react';
import SearchForm from './SearchForm';

export class Home extends Component {
  state = {
    search: '',
  };

  render() {
    return <SearchForm />;
  }
}

export default Home;
