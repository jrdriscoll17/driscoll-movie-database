import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies/movieActions';
import { withRouter } from 'react-router';
import './Search.css';

class SearchForm extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.fetchMovies(this.state.search);
    this.props.history.push(`/movies/${this.state.search}`);
  };

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit} className='form'>
          <p className='input-container'>
          <input
            type='text'
            className='movie-search'
            placeholder='e.g. Batman'
            onChange={this.handleChange}
          />
          <button type='submit' className='search-button'>
            Search
          </button>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({
  movieReducer: { loading, movies, errors, redirectTo },
}) => {
  return {
    loading,
    movies,
    errors,
    redirectTo,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchMovies })(SearchForm)
);
