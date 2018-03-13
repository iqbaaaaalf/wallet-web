import React, { Component } from 'react';
import moment from 'moment';

export default class TransactionItemDesktop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.transactionCollection.map((transaction, index) =>
        <tr key={index}>
          <td>{moment(transaction.date).format('dddd, DD/MM/YYYY, h:mm:ss a')}</td>
          <td>{transaction.FromWallet === null ? '' : transaction.FromWallet.User.name}</td>
          <td>{transaction.ToWallet === null ? '' : transaction.ToWallet.User.name}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
        </tr>,
    );
  }
}