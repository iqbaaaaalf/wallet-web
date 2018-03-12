import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Homepage/>
        </div>
    );
  }
}

export default App;
