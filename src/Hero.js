//This page is for the user profile to make posts to their page

import React from 'react';

const Hero = ({handleLogout}) => {
    return(
        // banner with logout
        <section className="hero">
        <nav>
        <h2>Welcome </h2>
        <button onClick={handleLogout}>Logout</button>
        </nav>

        <h3>Search Users</h3>
        <form>enter username/email<input></input></form>

        {/* create post form */}
        <h3>Create Post</h3>
        <form>Title<input></input></form>
        <form>Description<input></input></form>
        <form>Photo<input></input></form>

        <button>submit</button>
        


        </section>
        
    );
};
export default Hero;