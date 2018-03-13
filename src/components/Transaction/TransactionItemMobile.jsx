import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TransactionMobile from './TransactionMobile';

export default class TransactionItemMobile extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return this.props.transactionCollection.map((transaction, index) =>
        <div className="Card" key={index}>
          <text>{transaction.date}</text>
          <text>{transaction.FromWallet === null ? '':transaction.FromWallet.User.name}</text>
          <text>{transaction.ToWallet=== null ? '':transaction.ToWallet.User.name}</text>
          <text>{transaction.description}</text>
          <text>{transaction.amount}</text>
        </div>
    );
  }
}
TransactionItemMobile.propTypes = {
  transactionCollection: PropTypes.array.required,
};
