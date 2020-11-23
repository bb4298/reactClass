import logo from './logo.svg';
import './App.css';
import Random from "./components/Random";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Random></Random>
      </header>
    </div>
    );
  }
}

export default App;