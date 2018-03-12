import React, { Component } from 'react';
import '../styles/App.css';
<<<<<<< HEAD:src/components/App.jsx
import Dashboard from './Dashboard';
=======
>>>>>>> feature-homepage:src/js/App.jsx
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

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
