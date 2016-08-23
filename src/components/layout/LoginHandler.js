'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export default class LoginHandler extends React.Component{



render(){
  return(<GoogleLogin
    clientId="928203850037-9v6dd28rfd773tor7ocnnsljtbi4dq75.apps.googleusercontent.com"
    buttonText="Login"
    callback={responseGoogle} />,
  document.getElementById('googleButton'))};
}
