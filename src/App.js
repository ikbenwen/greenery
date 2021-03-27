import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import './pages/Styles/form.css'
import {useAuthState} from './context/AuthContext';
import Upload from "./pages/Upload";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";

function PrivateRoute({ children, ...rest }) {
    const { isAuthenticated } = useAuthState();

    return (
        <Route {...rest} render={() => {
        return isAuthenticated ? children : <Redirect to="/signin"/>
        }
        }/>
    );
}

function App() {
  return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>

            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
              <Route path="/upload">
              <Upload />
              </Route>
              <Route path="/search">
                  <SearchPage />
              </Route>
              <Route>
                <ErrorPage />
              </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;
