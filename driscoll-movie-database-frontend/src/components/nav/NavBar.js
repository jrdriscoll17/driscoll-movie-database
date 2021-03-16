import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <Link to='/' className='nav-link'>
        DMDB
      </Link>
    </div>
  );
};

export default NavBar;
