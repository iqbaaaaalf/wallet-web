import axios from 'axios';
import React, { Component } from 'react';

export default class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Iqbal',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users').then((response) => {
      this.setState({
        name: response.data.name,
      });
    });
  }

  render() {
    return (
        <div id={'username'} className="Name">
          Hello, {this.state.name}
        </div>
    );
  }
}