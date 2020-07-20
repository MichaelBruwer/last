import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './Components/Layout/Searchbar';
import Footer from './Components/Layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';

import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });

  return (
    <AuthState>
      <Router>
        <Fragment>
          <Searchbar />
          <div className='container'>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
