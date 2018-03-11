import React, { Component } from 'react';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import RecentTransactionTable from './RecentTransactionTable';

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
