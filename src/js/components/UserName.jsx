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
          <h1 className="card">Hello,{this.state.name}</h1>
        </div>
    );
  }
}