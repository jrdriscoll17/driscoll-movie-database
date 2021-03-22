import { Link } from 'react-router-dom';
import React from 'react';

// import './Nav.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const NavBar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color='inherit' component={Link} to='/'>
            DMDB
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  );
};

export default NavBar;
