import moment from 'moment';
import React, { Component } from 'react';

export default class TransactionItemDesktop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.transactionCollection.map((transaction, index) =>
        <tr key={index}>
          {/*{console.log(transaction.FromWallet.id === null ? '' : transaction.FromWallet.id ===*/}
          {/*this.props.transactionWalletId)}*/}
          <td>{moment(transaction.date).format('dddd, DD/MM/YYYY, h:mm:ss a')}</td>
          <td>
            {transaction.FromWallet === null ? '' : (transaction.FromWallet.id !==
            this.props.transactionWalletId
                ? transaction.FromWallet.User.name
                : '')}
            {transaction.ToWallet === null ? '' : (transaction.ToWallet.id !==
            this.props.transactionWalletId
                ? transaction.ToWallet.User.name
                : '')}
          </td>
          <td>{transaction.FromWallet === null ? 'Debit' : (transaction.FromWallet.id ===
          this.props.transactionWalletId ? 'Credit' : '')}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
        </tr>,
    );
  }
}