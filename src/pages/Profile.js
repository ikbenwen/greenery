import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import AvatarUploader from "../components/AvatarUploader";

function Profile() {
    const { user } = useAuthState();

    return (
        <>
            <h1>Profile</h1>
            <h2>userinformation</h2>
            {user && (
                <>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </>
            )}

            <h2>Userpage</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias
                qui quo unde?</p>
            <p>Back <Link to="/">Home</Link></p>

            <AvatarUploader />
        </>
    );
}

export default Profile;
