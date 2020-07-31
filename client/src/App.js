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
// eslint-disable-next-line
import Footer from './Components/Layout/Footer';
//authentication
import Alerts from './Components/Layout/Alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
//api
import ApiState from './context/Api/ApiState';
import User from './Components/users/User';
//css
import './App.css';
import CommentState from './context/Comment/CommentState';

const App = () => {
  useEffect(() => {
    //initializeing Materialize
    M.AutoInit();
  });

  return (
    <ApiState>
      <AuthState>
        <CommentState>
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
                    <Route exact path='/user/:login' component={User} />
                  </Switch>
                </div>
                {/* <Footer /> */}
              </Fragment>
            </Router>
          </AlertState>
        </CommentState>
      </AuthState>
    </ApiState>
  );
};

export default App;
