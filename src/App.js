import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from "./components/Footer";
import './App.css';
import {useAuthState} from "./context/AuthContext";

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
          </Switch>
        </div>
          <Footer />
      </>
  );
}

export default App;
