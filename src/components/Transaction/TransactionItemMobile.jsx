import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';

export default class TransactionItemMobile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.transactionCollection.map((transaction, index) =>
        <div className="card" key={index}>
          <text className={'transaction-item-mobile__date'}>{moment(transaction.date).format('dddd, DD/MM/YYYY, h:mm:ss a')}</text>
          <text className={'transaction-item-mobile__amount'}>Rp.{transaction.amount},-</text>
          <text className={'transaction-item-mobile__from-wallet'}>{transaction.FromWallet === null
              ? ''
              : `From : ${transaction.FromWallet.User.name}`}</text>
          <text className={'transaction-item-mobile__to-wallet'}>{transaction.ToWallet === null
              ? ''
              : `To : ${transaction.ToWallet.User.name}`}</text>
          <text className={'transaction-item-mobile__description'}>{transaction.description}</text>
        </div>,
    );
  }
}
TransactionItemMobile.propTypes = {
  transactionCollection: PropTypes.array.required,
};
