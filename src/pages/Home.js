import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuthState } from '../context/AuthContext';

function Home() {
    const { isAuthenticated } = useAuthState();
    console.log(isAuthenticated);


    return (
        <>
            <h1>Homepage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
            <p>If you are logged-in check out your <Link to="/profile">Profile Page</Link></p>
            <p><Link to="/signin">Login</Link> or <Link to="/signup">Register</Link> if you don't have an account</p>
        </>
    );
}

export default Home;
