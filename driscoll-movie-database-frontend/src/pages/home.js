import React, { Component } from 'react';
import theaterBackground from '../images/theater-background.jpg';

export class home extends Component {
  render() {
    return <div style={{ backgroundImage: `url(${theaterBackground})` }}></div>;
  }
}

export default home;
