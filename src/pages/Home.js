import React from 'react';
import { useAuthState } from '../context/AuthContext';
import Trefle from "../components/Trefle";
import {Link} from "react-router-dom";
import '../App.css';

function Home() {
    const { isAuthenticated } = useAuthState();

    return (
        <>
            <h1>Welcome to the Greenery</h1>
            <h2><Link to="/search">Search</Link> plant information</h2>
            < Trefle />
        </>
    );
}

export default Home;
