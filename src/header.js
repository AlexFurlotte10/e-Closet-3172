import React from 'react';
import './App.css';


class Header extends React.Component
{
  render()
  {
    return (
        //header options links will be updated
        <header>
          <div id ="e-closet">
            <h1>Hush Hush</h1>
            </div>
            <a href="Login.js">Home</a>
            <a href="Hero.js">My Profile</a>
            
        </header>
    )
  }
}
export default Header;