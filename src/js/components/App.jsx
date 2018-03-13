import React, { Component } from 'react';
import { link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';
import Stage from './Navigation/Stage';
import Dashboard from './Dashboard';
import Navigation from './Navigation/Navigation';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation/>
          <Stage/>
        </div>
    );
  }
}

export default App;
