import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import './Styles/Profile.css';
import greenLeafIcon from '../assets/green-leaf-icon.jpeg';

const defaultImage = greenLeafIcon;

function Profile() {

    const { user } = useAuthState();

    return (
        <>
            <div className="profile-container">
                <div className="avatar-flip">
                    <img src={user.avatar} height="150" width="150" alt="profilePicture"/>
                    <img src={defaultImage} height="150" width="150" alt="profilePicture" />
                </div>
                {user && (
                    <>
                        <h2>{ user.username }</h2>
                        <p className="profile-text"><strong>Email:</strong>{ user.email }</p>
                        <p className="profile-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus ad asperiores aspernatur aut consectet
                        </p>
                    </>
                )}
              <p> <Link to="/upload">Upload garden diary Files</Link></p>
                <p>Back <Link to="/">Home</Link></p>
            </div>

        </>
    );
}

export default Profile;
