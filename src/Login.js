/*
This is a page for the login/homepage. Calls functions fromm app.js and applies them to the forms
in the react app
*/

import React from 'react';
import './App.css';
import Header from'./header';
import Footer from './footer';
import clothes from './img/clothes.jfif';

var PORT = process.env.PORT || 3000;
//constructor
const login = (props) => {

    const{ email, setEmail, password, setPassword, handleLogin, handleSignup, 
        hasAccount, setHasAccount, emailError, passwordError} = props;

    return(
        <section classname="login">
            <Header></Header>
            <h1 id ="head">Welcome to e-Closet</h1>
         <h3 id ="secondhead">Buy/Sell/Trade</h3>
         
        {/* form to login */}
            <div className="loginContainer">
                <h4>Login/Sign Up <br></br></h4>
                <label> Email<br></br></label>
                <input type="text"autoFocus required value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
        {/* In case user uses invalid credentials for username*/}
    <p className="errorMsg">{emailError}</p>
    <label>Password<br></br></label>
    <input type="password" required value={password}
     onChange={(e)=> setPassword(e.target.value)}/>
     {/* In case user uses invalid credentials for password*/}
     <p className="errorMsg">{passwordError}</p>
     {/* Does user have an account or vice versa? Select to show signup or sign in */}
     
     <div className="btnContainer">
         {hasAccount ? (
             <>
                <button onClick={()=>handleLogin()}>Sign in</button>
                <p>New to e-Closet? {" "}<a  onClick={() => setHasAccount(!hasAccount)}>  Sign up </a></p>
             </>
         ) : (
            <>
            <button onClick={handleSignup}>Sign Up</button>
            <p>Have an account?
                 <span  onClick={() => setHasAccount(!hasAccount)}>  Sign in</span></p>
         </>

         )}
     </div>
     </div>
     {/* home page description */}
     <div className="welcome">
         
         <img src={clothes} alt="img"className='img'/>
     </div>
            <Footer></Footer>
            </section>
        
    )
}
export default login;