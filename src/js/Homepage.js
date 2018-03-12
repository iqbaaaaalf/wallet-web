import React, { Component } from 'react';
import axios from 'axios';
import TransactionDesktop from './TransactionDesktop';
import TransactionMobile from './TransactionMobile';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Iqbal',
      transactionCollection: [],
      balance:0,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/wallets/1/transactions?size=1').then((response) => {
      this.setState({
        transactionCollection: response.data,
      });
    });
    axios.get('http://localhost:3000/users/1/wallets').then((response) =>{
      this.setState({
        balance: response.data.balance,
      });
    });
  }

  render() {
    return (
        <div>
          <h1 className="welcome" id="WelcomeMessage">Hello,{this.state.name}</h1>
          <h1 className="balance" id="Balance">Balance :{this.state.balance}</h1>
          <TransactionDesktop transactionCollection={this.state.transactionCollection}/>
          <TransactionMobile transactionCollection={this.state.transactionCollection}/>
        </div>
    );
  }
}
