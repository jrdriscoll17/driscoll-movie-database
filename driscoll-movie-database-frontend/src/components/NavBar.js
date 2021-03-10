import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  return (
    <div className='nav-container'>
      <Link to='/' classname='nav-link'>
        DMDB
      </Link>
    </div>
  );
}
