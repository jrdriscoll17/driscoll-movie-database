import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

export default function NavBar() {
  return (
    <div className='nav-container'>
      <Link to='/' className='nav-link'>
        DMDB
      </Link>
    </div>
  );
}
