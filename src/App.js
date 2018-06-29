import React, { Component } from 'react';

// what does React give us vs what does Component give us...

// components
import Description from './components/Description/Description';
import AccountInfo from './components/AccountInfo/AccountInfo';
import Cookie from './components/Cookie/Cookie';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Description />
        <AccountInfo />
        <Cookie />
      </div>
    );
  }
}

export default App;
