import axios from 'axios';
import React, { Component } from 'react';

export default class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Iqbal',
    };
  }

  render() {
    return (
        <div id={'username'} className="Name">
          Hello, {this.state.name}
        </div>
    );
  }
}