import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export class Home extends Component {
  constructor() {
    super();
    const state = {
      search: '',
    };
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios(`http://www.omdbapi.com/?apikey=1f082bdb&s=${this.state.search}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='movie-search'
            id='movie-search'
            placeholder='e.g. Batman'
            onChange={this.handleChange}
          />
          <button type='submit' name='search'>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Home);
