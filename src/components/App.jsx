import React, { Component } from 'react';
import '../styles/App.css';
<<<<<<< HEAD:src/js/App.jsx
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Homepage from './Homepage';
=======
<<<<<<< HEAD:src/components/App.jsx
import Dashboard from './Dashboard';
=======
>>>>>>> feature-homepage:src/js/App.jsx
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
>>>>>>> 2f540c42f9df5acfb11b71d2d01f0294cbe2b07b:src/components/App.jsx

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
