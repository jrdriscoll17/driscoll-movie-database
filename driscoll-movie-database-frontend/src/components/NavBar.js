import React, { Component } from 'react';

//Material UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class NavBar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>DMDB</Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
