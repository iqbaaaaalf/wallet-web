import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Homepage from '../Homepage';
import Transfer from '../Transfer/Transfer';

export default class Stage extends Component {
  render() {
    return (
        <main>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/transfer' component={Transfer}/>
          </Switch>
        </main>
    );
  }
}