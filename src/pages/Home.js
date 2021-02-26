import React from 'react';
import { useAuthState } from '../context/AuthContext';
import Search from "../components/Search";

function Home() {
    const { isAuthenticated } = useAuthState();

    return (
        <>
            <h1>Welcome to the Greenery</h1>
            < Search />
        </>
    );
}

export default Home;
