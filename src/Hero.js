import React from 'react';
import footer from './footer'

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
        <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        </nav>
        </section>
    );
};
<footer></footer>
export default Hero;