import React, { Component } from 'react';
// import Movie from './Movie';
import Movies from './Movies';
// import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieContainer extends Component {
  render() {
    return <Movies movies={this.props.movies} />;
  }
}

const mapStateToProps = ({ movieReducer: { movies } }) => {
  return {
    movies,
  };
};

export default connect(mapStateToProps)(MovieContainer);
