import React, { useState } from 'react';
import './Styles/UpdateUser.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as Spinner } from "../assets/refresh.svg";

export default function UpdateUser() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const [createUserSuccess, setCreateUserSuccess] = useState(false);

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');

        event.preventDefault();

    try {
        const response = await axios.patch('http://localhost:8080/api/auth/updateuser', {
            username: username,
            email: email,
            password: password,
            avatar: avatar,
            role: ["user"],
        });
        console.log(response.data);

        if (response.status === 200) {
            setCreateUserSuccess(true);
        }
    } catch(e) {
        console.error(e);
        if (e.message.includes('400')) {
            setError('Please choose a different username');
        } else {
            setError('Oops! Something went wrong, please try again');
        }
    }
    toggleLoading(false);
}


    return (
        <>
            <h1>Register</h1>
            {createUserSuccess === true && (
                <p className="message-success">Updated succesfully. click <Link to="/signin">here</Link> to login</p>
            )}
            <div className="text-form-container">
                <form className="text-form" onSubmit={onSubmit}>
                    <label htmlFor="email-field">
                        Email:
                        <input
                            type="email"
                            id="email-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label htmlFor="username-field">
                        Username:
                        <input
                            type="text"
                            id="username-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label htmlFor="password-field">
                        Password:
                        <input
                            type="password"
                            id="password-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <label htmlFor="avatar-field">
                        Avatar:
                        <input
                            type="text"
                            id="avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}/>
                    </label>

                    <button
                        type="submit"
                        className="form-button"
                        disabled={loading}
                    >
                        {loading ? <Spinner className="loading-icon" /> : 'Register User'}
                    </button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </>
    );
}
