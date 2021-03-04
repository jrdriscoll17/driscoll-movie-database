import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Material UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class NavBar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <AppBar>
          <Toolbar>
            <Typography variant='h6' component={Link} to={'/'}>
              DMDB
            </Typography>
            {/* <Button color='inherit' component={Link} to='/'>
              DMDB
            </Button> */}
            <Button color='inherit' component={Link} to='/login'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
