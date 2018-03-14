import React, { Component } from 'react';
import store from 'simple-global-store';

export default class UserName extends Component {
  render() {
    return (
        <div id={'username'} className="Name">
          Hello, {store.data.name}
        </div>
    );
  }
}