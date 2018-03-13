import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';
import Dashboard from './Dashboard';

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
