//This page is for the user profile to make posts to their page

import React from 'react';
import Footer from './footer';
import Header from './header';
import Clothes2 from './img/fixed-post.jfif';

const Hero = ({handleLogout}) => {
    return(
        // banner with logout
        <section className="hero">
            <Header></Header>
        <nav>
        <h2>Welcome </h2>
        <button onClick={handleLogout}>Logout</button>
        </nav>

        

        {/* create post form */}
        <div className = 'postForm'>
        <h3>Create Post</h3>
        <form>Title<input></input></form>
        <form className='description'>Description<input></input></form>
        <form>Photo<input type='file'></input></form>

        <button>submit</button>
        
        
        </div>
            {/* This section is awaiting functionality*/}
        <div className='community'>
            <h1>Community Posts</h1>
            <img src={Clothes2} alt="img"className='exampleImg'/>
            <h3>Knit sweater</h3>
            <p>Size L, condition 8/10, contact user1234@example.com to buy!</p>
        </div>
        <Footer></Footer>
        </section>
        
    );
};
<footer></footer>
export default Hero;