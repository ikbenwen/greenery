import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import './Styles/Profile.css';

//user.avatar == null ? profileImage : user.avatar

function Profile() {
    const { user } = useAuthState();
    const profileImage = 'https://www.pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg';

    return (

        <>
            { console.log(user.avatar)}
            <div className="profile-container">
                <div className="avatar-flip">
                    <img src={user.avatar} height="150" width="150" alt="profilePicture"/>
                    <img src={user.avatar} height="150" width="150" alt="profilePicture" />
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
