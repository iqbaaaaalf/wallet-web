import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TransactionDesktop from './TransactionDesktop';
import TransactionMobile from './TransactionMobile';

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionCollection: [],
    };
  }

  componentDidMount() {
    let url = `http://localhost:3000/wallets/${this.props.walletNumber}/transactions`;
    if (this.props.limitFetching !== undefined) {
      url += `?size=${this.props.limitFetching}`;
    }
    axios.get(url).then((response) => {
      this.setState({
        transactionCollection: response.data,
      });
    });
  }


  render() {
    return (
        <div>
          <TransactionDesktop transactionCollection={this.state.transactionCollection}/>
          <TransactionMobile transactionCollection={this.state.transactionCollection}/>
        </div>
    );
  }
}
Transaction.defaultProps = {
  transactionFilterValue: '',
  transactionFilterColumn: '',
  transactionSortValue: '',
  transactionSortColumn: '',
};
Transaction.propTypes = {
  walletNumber: PropTypes.number.required,
  limitFetching: PropTypes.number,
  transactionFilterValue: PropTypes.string,
  transactionFilterColumn: PropTypes.string,
  transactionSortValue: PropTypes.string,
  transactionSortColumn: PropTypes.string,
};
