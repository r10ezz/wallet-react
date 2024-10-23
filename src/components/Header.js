// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-main">
      <div className="wallet">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Wallet</Link>
      </div>
      <div className="h-buttons">
        <Link to="/signup" className='sign-up'>Sign up</Link>
        <Link to="/login">
          <button className='log-in'>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
