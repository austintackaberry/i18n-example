import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Hello, world!</h1>
        <p>It is a beautiful day outside</p>
        <Link to="/day">Click here to find out why!</Link>
      </div>
    );
  }
}

export default Home;
