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
        <p>Contact us at HushHush@gmail.com</p>
        <p>© 2020 Hush Hush</p>
        <br></br>
        <img src={logo1} alt='Facebooks logo, a square with an F inside it'/>
        <img src={logo2} height='60' alt='Instagrams logo, basic drawing of a camera'/>
        <img src={logo3} height='60' alt='Twitters logo, a small little bird flying.'/>
        </footer>
    )
  }
}
export default Footer;