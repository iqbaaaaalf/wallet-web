import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Transaction from './Transaction/Transaction';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Dashboard/>
        </div>
    );
  }
}

export default App;
