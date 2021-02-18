import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext, useAuthState } from '../context/AuthContext';
import { ReactComponent as Spinner } from '../assets/refresh.svg';

function SignIn() {
    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/profile');
        }
    }, [isAuthenticated]);

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');

        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
            })

            login(response.data);
        } catch(e) {
            console.error(e);
            setError('Login failed');
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>Login</h1>
            <div className="text-form-container">
                <form className="text-form" onSubmit={onSubmit}>
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
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button
                        type="submit"
                        className="form-button"
                        disabled={loading}
                    >
                        {loading ? <Spinner className="loading-icon" /> : 'Login'}
                    </button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </>
    );
}

export default SignIn;
