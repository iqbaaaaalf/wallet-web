import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      balance: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users/1/wallets').then((response) => {
      this.setState({
        balance: response.balance,
      });
    });
  }

  render() {
    return (
        <div>
          <h1 className="Name">{this.state.name}</h1>
          <label htmlFor="Balance">Your Balance</label>
          <span className="Balance">
             {this.state.balance}
          </span>
        </div>
    );
  }
}