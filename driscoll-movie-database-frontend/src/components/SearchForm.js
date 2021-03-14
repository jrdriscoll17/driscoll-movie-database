import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies/movieActions';
import { withRouter } from 'react-router';

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
    // if (this.props.redirectTo) {
    //   this.props.history.push(`/movies/${this.state.search}`);
    // }
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
