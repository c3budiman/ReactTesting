import React, { Component } from 'react';
import './App.css';
import Routes from './Components/BasicExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

class App extends Component {
  render() {
    return (
      <div>
      <Routes />
      </div>
    );
  }
}

export default App;
