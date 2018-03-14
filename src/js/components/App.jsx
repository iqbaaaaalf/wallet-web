import React, { Component } from 'react';
import { link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';
import Navigation from './Navigation/Navigation';
import Stage from './Navigation/Stage';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className={'row'}>
            <div className={'col-3 align-self-center'}>
              <Navigation/>
            </div>
            <div className={'col'}>
              <Stage/>
            </div>
          </div>
        </div>
    )
        ;
  }
}

export default App;
