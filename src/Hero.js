//This page is for the user profile to make posts to their page

import React from 'react';
import Footer from './footer';
import Header from './header';
import Clothes2 from './img/fixed-post.jfif';
import addPost from './App';
const Hero = ({handleLogout}) => {
    return(
        // banner with logout
        <section className="hero">
            <Header></Header>
        <div id ="welcome">
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        </div>



        {/* new version of form, better to work with*/}
        
        <form id="add-post">
            <h3>Create Post</h3>
            <label for="title">Title</label>
            <input type="text" id="postTitle" name="title" rows="2"></input>
            <br></br>
            <label for="description">Description</label>
            <textarea type='text' id="postDescription" rows ="10" cols="50" placeholder="Size,Description,Contact Information"></textarea>
            <br></br>
            <input type="file" id="postFile" name="file"></input>
            <br></br>
            <button type='submit' onSubmit={addPost}>submit</button>
        </form>
        {/* The button tag should have onClick={addPost} */}


        {/* OLD create post form 
        <div className = 'postForm'>
        <h3>Create Post</h3>
        <form ><textarea placeholder="Title"rows="1"cols="20"></textarea></form>
        <form className='description'><textarea rows ="10" cols="50" placeholder="Size,Description,Contact Information"></textarea></form>
        <form>Photo<input type='file'></input></form>

        <button>submit</button>
        
        
        </div> */}
            {/* This section is awaiting functionality, demo example*/}
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