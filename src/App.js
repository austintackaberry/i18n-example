import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Day from './pages/Day';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />
      </div>
    );
  }
}

export default App;
