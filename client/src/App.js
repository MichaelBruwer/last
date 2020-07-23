import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './Components/Layout/Searchbar';
import Footer from './Components/Layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Alerts from './Components/Layout/Alerts';

import Home from './Components/pages/Home';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setToken from './Components/setToken';
import './App.css';

if (localStorage.token) {
  setToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Searchbar />

            <div className='container'>
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
