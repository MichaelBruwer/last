import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
//pages
import Home from './Components/pages/Home';

//login and register
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
//Layout
import Searchbar from './Components/Layout/Searchbar';
import Footer from './Components/Layout/Footer';
//authentication
import Alerts from './Components/Layout/Alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
//api
import ApiState from './context/Api/ApiState';
//css
import './App.css';

const App = () => {
  useEffect(() => {
    //initializeing Materialize
    M.AutoInit();
  });

  return (
    <ApiState>
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
    </ApiState>
  );
};

export default App;
