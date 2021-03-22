import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchMovies } from '../../actions/movies/movieActions';
// import './Search.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

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
      <Grid
        container
        spacing={0}
        direction='row'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}>
        <Grid item xs={10} md={6}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant='outlined'
              placeholder='e.g. Batman'
              fullWidth
              onChange={this.handleChange}
            />
            <Button variant='contained' size='large' type='submit'>
              Search
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ movieReducer: { loading, movies, errors } }) => {
  return {
    loading,
    movies,
    errors,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchMovies })(SearchForm)
);
