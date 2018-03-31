import React, { Component } from 'react';
import './login.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyBookTime</h1>
        </header>
        <p className="App-intro">
          Please, <a className="sign">Sign in</a> or <a className="sign">Sign up</a>.
        </p>
      </div>
    );
  }
}

export default App;