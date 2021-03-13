import React, { PureComponent } from 'react';
// import Movie from './Movie';
import Movies from './Movies';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path='/movies'>
          <Movies movies={this.props.movies} />
        </Route>
        {/* <Route path='/movie'>
          <Movie movie={this.props.movie} />
        </Route> */}
      </Switch>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies,
  };
};

export default connect(mapStateToProps)(MovieContainer);
