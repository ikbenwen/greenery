import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p>If you are logged-in check out your <Link to="/profile">Profile Page</Link></p>
            <p><Link to="/signin">Login</Link> or <Link to="/signup">Register</Link> if you don't have an account</p>
        </footer>
    )
}
