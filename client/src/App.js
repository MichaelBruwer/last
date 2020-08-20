import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
//pages
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Profile from './Components/pages/Profile';
import united from './Components/pages/united';
import allyf from './Components/pages/allyf';
import xcel from './Components/pages/xcel';
import rockwell from './Components/pages/rockwell';

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
                    <Route exact path='/SR' component={Home} />
                    <Route exact path='/' component={About} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    {/* login page hardcoded links start */}
                    <Route exact path='/Profile' component={Profile} />
                    <Route exact path='/united' component={united} />
                    <Route exact path='/allyf' component={allyf} />
                    <Route exact path='/xcel' component={xcel} />
                    <Route exact path='/rockwell' component={rockwell} />

                    {/* login page hardcoded links end */}
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
