import React, { Component } from 'react';
import TransactionItemDesktop from './TransactionItemDesktop';
import PropTypes from 'prop-types';
import TransactionItemMobile from './TransactionItemMobile';

export default class TransactionMobile extends Component {

  render() {
    return (
        <div className={'transaction-display-mobile'}>
          <TransactionItemMobile transactionCollection={this.props.transactionCollection}/>
        </div>
    );
  }
}
TransactionMobile.propTypes = {
  transactionCollection: PropTypes.array.required,
};
