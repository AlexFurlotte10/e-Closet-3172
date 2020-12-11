/*App.js contains all functions used for logging in and out, and making profile posts
NOTE: This app has code that was taken from https://www.youtube.com/watch?v=cFgoSrOui2M&t=908s&ab_channel=h3webdevtuts
      to learn login functionality. Code has been tailored to the needs ofe-closet
*/
import React, {useState, useEffect} from "react";
import fire from './fire';
import Login from './Login';
import Hero from "./Hero";
import './App.css';

//constructor
const App = () => {
  const [user,setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
//initialize empty form
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  //clear if there is invalid entry
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }
//login functionality for when user has an account already
  const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }
      
    });
  };
  //Signup functionality for new users
  const handleSignup = () => {
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
       
        setEmailError(err.message);
        break;
        case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }
    });
};
//for the logout button on user profile
const handleLogout = () => {
  fire.auth().signOut()
};
//does user exist?
const authListener = () => {
  fire.auth().onAuthStateChanged(user => {
    if (user) {
      clearInputs();
      setUser(user);
    }
    else{
      setUser("");
    }
  });
};

useEffect(() =>{
  authListener();
})
  return(

  
     <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (

     
     <Login
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError ={passwordError}/>
      )}
    </div>
  );
  };

  

export default App;
