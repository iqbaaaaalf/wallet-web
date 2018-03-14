import React, { Component } from 'react';
import axios from 'axios';
import Transaction from './Transaction/Transaction';
import TransactionDesktop from './Transaction/TransactionDesktop';
import TransactionMobile from './Transaction/TransactionMobile';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Iqbal',
      transactionCollection: [],
      balance:0,
    };
  }

  render() {
    return (
        <div>
          <h1 className="welcome" id="WelcomeMessage">Hello,{this.state.name}</h1>
          <Transaction walletNumber={1}/>
        </div>
    );
  }
}
