import React from 'react';
import './App.css';
import logo1 from './img/fblogo.png';
import logo2 from './img/instalogo.png';
import logo3 from './img/twitterlogo.png';


class Footer extends React.Component
{
  render()
  {
    return (
      //footer options links and fuctionality will be updated
        <footer>
        <a href="Login.js">Home</a><br></br>
        <p>Contact us at e-Closet@gmail.com</p>
        <p>© 2020 e-Closet</p>
        <br></br>
        <img src={logo1}/>
        <img src={logo2} height='60'/>
        <img src={logo3} height='60'/>
        </footer>
    )
  }
}
export default Footer;