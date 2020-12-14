/*
This is a page for the login/homepage. Calls functions fromm app.js and applies them to the forms
in the react app
*/

import React from 'react';
import './App.css';
import Header from'./header';
import Footer from './footer';

//constructor
const login = (props) => {

    const{ email, setEmail, password, setPassword, handleLogin, handleSignup, 
        hasAccount, setHasAccount, emailError, passwordError} = props;

    return(
        <section classname="login">
            <Header></Header>
            <h1>Welcome to e-Closet</h1>
         <h3>This is a place where you can post your clothing to show your friends!</h3>
         <h4>We offer a place dedicated to the buying and selling of clothes</h4>
        {/* form to login */}
            <div className="loginContainer">
                <label> Email</label>
                <input type="text"autoFocus required value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
        {/* In case user uses invalid credentials for username*/}
    <p className="errorMsg">{emailError}</p>;
    <label>Password</label>
    <input type="password" required value={password}
     onChange={(e)=> setPassword(e.target.value)}/>
     {/* In case user uses invalid credentials for password*/}
     <p className="errorMsg">{passwordError}</p>
     {/* Does user have an account or vice versa? Select to show signup or sign in */}
     
     <div className="btnContainer">
         {hasAccount ? (
             <>
                <button onClick={()=>handleLogin}>Sign in</button>
                <p>Don't have an account ? {" "}<span  onClick={() => setHasAccount(!hasAccount)}>Sign up </span></p>
             </>
         ) : (
            <>
            <button onClick={handleSignup}>Sign Up</button>
            <p>Have an account ?
                 <span  onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
         </>

         )}
     </div>
     </div>
     {/* home page description */}
     <div>
         
     </div>
            <Footer></Footer>
            </section>
        
    )
}
export default login;