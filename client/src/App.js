import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
      </Router>
    )
  }
}

export default App;
