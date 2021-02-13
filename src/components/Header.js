import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, useAuthState } from '../context/AuthContext';

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
                {isAuthenticated ? (
                    <button
                        type="button"
                        onClick={() => logout()}
                    >
                        Logout
                    </button>
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
                        <button
                            type="button"
                            onClick={() => history.push('/')}
                        >
                            Home
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
