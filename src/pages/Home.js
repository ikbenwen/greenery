import React from 'react';
import { useAuthState } from '../context/AuthContext';
import Trefle from "../components/Trefle";
import {Link} from "react-router-dom";

function Home() {
    const { isAuthenticated } = useAuthState();

    return (
        <>
            <h1>Welcome to the Greenery</h1>
            <p >Search plant information<Link to="/search"> here</Link></p>
            < Trefle />
        </>
    );
}

export default Home;
