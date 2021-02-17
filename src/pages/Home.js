import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuthState } from '../context/AuthContext';
import Search from "../components/Search";

function Home() {
    const { isAuthenticated } = useAuthState();
    console.log(isAuthenticated);


    return (
        <>
            <h1>Welcome to the Greenery</h1>
            < Search />

        </>
    );
}

export default Home;
