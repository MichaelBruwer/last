import axios from 'axios';
//check if token is passed in
const setToken = (token) => {
  //yes set to header
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } //no delete from header
  else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setToken;
