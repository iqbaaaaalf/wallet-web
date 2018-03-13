import axios from 'axios';
import React, { Component } from 'react';

export default class UserBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users/1/wallets').then((response) => {
      this.setState({
        balance: response.data.balance,
      });
    });
  }

  render() {
    return (
        <div className={'wallet-balance'} id={'wallet-balance'}>
          Rp.{this.state.balance},-
        </div>
    );
  }
}