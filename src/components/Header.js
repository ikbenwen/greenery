import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, useAuthState } from '../context/AuthContext';
import './Styles/Header.css'

function Header() {

    const history = useHistory();
    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push('/signin');
        }
    }, [isAuthenticated]);

    return (
        <header>
            <div>
                <button className="home-button"
                        type="button"
                        onClick={() => history.push('/')}
                >
                    Home
                </button>
                {isAuthenticated ? (
                    <>
                        <button
                            type="button"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                        <button
                            type="button"
                            onClick={() => history.push('/profile')}
                        >
                            Profile
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={() => history.push('/signin')}
                        >
                            Signin
                        </button>
                        <button
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
