import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import AvatarUploader from "../components/AvatarUploader";
import sandwich from '../assets/adventuretimesandwich.png';
import granny from '../assets/funnygrannyprofilepic.jpg';
import './Styles/Profile.css';

function Profile() {
    const { user } = useAuthState();

    return (
        <>
            <div className="profile-container">
                <div className="avatar-flip">
                    <img src={granny} height="150" width="150" />
                    <img src={sandwich} height="150" width="150" />
                </div>
            {user && (
                <>
                    <h2>{user.username}</h2>
                    <p className="profile-text"><strong>Email:</strong> {user.email}</p>
                    <p className="profile-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus ad asperiores aspernatur aut consectet</p>
                </>
            )}

            <p>Back <Link to="/">Home</Link></p>
                <p> <Link to="/update"> Upload Avatar</Link></p>
            </div>

        </>
    );
}

export default Profile;
