import React, { Component } from 'react';
import '../styles/App.css';
import LoginForm from './LoginForm';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <LoginForm/>
        </div>
    );
  }
}

export default App;
