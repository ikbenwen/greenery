import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {useAuthState} from './context/AuthContext';
import Upload from "./pages/Upload";
import PlantDetailsPage from "./pages/PlantDetailsPage"

const errorImage = 'https://bvbvisuals.be/wp-content/uploads/2020/04/giphy.gif'

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
              <Route path="/details">
                  <PlantDetailsPage />
              </Route >
              <Route>
                  <div className="page-not-found-container">
                      <h2>404 Page Not Found</h2>
                      <img src={errorImage} alt="sadPlant"/>
                  </div>
              </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;
