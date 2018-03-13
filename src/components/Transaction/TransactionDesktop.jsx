import React, { Component } from 'react';
import TransactionItemDesktop from './TransactionItemDesktop';
import PropTypes from 'prop-types';

export default class TransactionDesktop extends Component {

  render() {
    return (
        <table className={'table table-bordered transaction-display-desktop'}>
          <thead>
          <tr>
            <th>date</th>
            <th>from</th>
            <th>To</th>
            <th>description</th>
            <th>amount</th>
          </tr>
          </thead>
          <tbody>
          <TransactionItemDesktop transactionCollection={this.props.transactionCollection}/>
          </tbody>
        </table>
    );
  }
}
TransactionDesktop.propTypes = {
  transactionCollection: PropTypes.array.required,
};
