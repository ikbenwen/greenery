import React from 'react';
import { useAuthState } from '../context/AuthContext';
import Trefle from "../components/Trefle";

function Home() {
    const { isAuthenticated } = useAuthState();

    return (
        <>
            <h1>Welcome to the Greenery</h1>
            < Trefle />
        </>
    );
}

export default Home;
