import React from 'react';
import './App.css';


class Header extends React.Component
{
  render()
  {
    return (
        
        <header>
            <h1>e-Closet</h1>
            <a href="#search">Search</a>
            <a href="#profile">My Profile</a>
            <a href="#logout">Logout</a>
        </header>
    )
  }
}
export default Header;